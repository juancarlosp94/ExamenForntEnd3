import { useState } from "react"

const Form = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState(0);


    const handleSubmit = (e) => {
        e.preventDeafault();
        if(title.length <= 3 && author.length <= 6 && title[0] ){
            console.log("Form was incorrect");
        } else {
            console.log("Form completed!!");
        }

    }

 


    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input type="text"
                 placeholder="Enter a title"
                 id="title"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="author"></label>
                <input type="text"
                 placeholder="Enter an author"
                 id="author"
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="year"></label>
                <input type="number"
                 placeholder="Enter a year"
                 id="year"
                 value={year}
                 onChange={(e) => setYear(e.target.value)}/>
            </div>
            <input type="submit" value="Send"/>
        </form>

    )
}

export default Form