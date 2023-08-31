function handleFormSubmit(evt) {
    evt.preventDefault()
    console.log('SUBMITTSD THE FORM!')
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit} >
            <button>Submit</button>
        </form>
    )
}