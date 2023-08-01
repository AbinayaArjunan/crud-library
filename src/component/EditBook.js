import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Editbook({ book, setBook, editid }) {

    const findedit = book.find(b => b.id === editid)

    const [edit, setEdit] = useState([]);

    const [style] = useState("red")

    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = "*Required"
        }
        if (!values.image) {
            errors.image = "*Required"
        }
        if (!values.author) {
            errors.author = "*Required"
        }
        if (!values.edition) {
            errors.edition = "*Required"
        }
        if (!values.pages) {
            errors.pages = "*Required"
        }
        return errors
    }

    const Formik = useFormik({
        initialValues: {
            id: editid,
            title: findedit.title,
            image: findedit.image,
            author: findedit.author,
            edition: findedit.edition,
            pages: findedit.pages
        },
        validate,
        onSubmit: values => {
            setBook(book.map(b => {
                if (b.id === editid) {
                    return edit;
                } else {
                    return b
                }
            }))
        }
    })

    useEffect(() => {
        setEdit(Formik.values)
    }, [Formik.values])




    return (

        <div className='container-fluid bg-primary bg-opacity-75 rounded text-white'>
            <form onSubmit={Formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">Book Title : </label>
                    <input type="text" className="form-control" id="title" autoComplete='off' placeholder="Enter book Title" value={Formik.values.title} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.title && Formik.errors.title ? <span className='fw-bold' style={{ color: style }}>{Formik.errors.title}</span> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label fw-bold">Book Image_Url : </label>
                    <input type="text" className="form-control" id="image" autoComplete='off' placeholder='Enter image url' value={Formik.values.image} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.image && Formik.errors.image ? <span className='fw-bold' style={{ color: style }}>{Formik.errors.image}</span> : null}

                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label fw-bold">Book Author Name : </label>
                    <input type="text" className="form-control" id="author" autoComplete='off' placeholder='Enter author name' value={Formik.values.author} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.author && Formik.errors.author ? <span className='fw-bold' style={{ color: style }}>{Formik.errors.author}</span> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="edition" className="form-label fw-bold">Book Edition No : </label>
                    <input type="number" className="form-control" id="edition" autoComplete='off' placeholder='Enter book edition' value={Formik.values.edition} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.edition && Formik.errors.edition ? <span className='fw-bold' style={{ color: style }}>{Formik.errors.edition}</span> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="pages" className="form-label fw-bold">Book Page Count : </label>
                    <input type="number" className="form-control" id="pages" autoComplete='off' placeholder='Enter book pages count' value={Formik.values.pages} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.touched.pages && Formik.errors.pages ? <span className='fw-bold' style={{ color: style }}>{Formik.errors.pages}</span> : null}
                </div>
                <Link to='/Book-List'><button className="btn btn-primary bg-success m-3 pe-4 ps-4">Back</button></Link>

                <Link to='/Book-List'><button type="submit" className="btn btn-primary" >Submit</button></Link>
            </form>
        </div>
    )
}

export default Editbook;