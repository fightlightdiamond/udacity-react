import React, {} from "react";

const App: React.FC = () => {
    return <section className={'container mx-auto'}>
        <h1>App</h1>learn react
        <div>
            <form>
                <label htmlFor="fname">First name:</label>
                <br/>
                <input type="text" name="fname" data-testid='first-name-input'/>
                <br/>
                <label htmlFor="lname">Last name:</label>
                <br/>
                <input type="text" name="lname" data-testid='last-name-input'/>
                <br/>
                <input type="submit" value='Submit'/>
            </form>
        </div>
    </section>
}

export default App