const Form2 = () => {
    return (
        <>
            <form>
                <label htmlFor="name">Enter Your Name:</label>
                <input type="text" id="name"/>
                <br/>
                <p>What Console Do You Prefer?</p>
                <input type="radio" id="PlayStation" name="console"/>
                <label htmlFor="PlayStation">PlayStation</label>
                <br/>
                <input type="radio" id="Nintendo Switch" name="console"/>
                <label htmlFor="Nintendo Switch">Nintendo Switch</label>
                <br/>
                <input type="radio" id="Xbox" name="console"/>
                <label htmlFor="Xbox">Xbox</label>
                <br/>
                <input type="radio" id="PC" name="console"/>
                <label htmlFor="PC">PC</label>
                <br/>
                <input type="radio" id="Mobile" name="console"/>
                <label htmlFor="Mobile">Mobile</label>
                <br/>
                <input type="radio" id="Other" name="console"/>
                <label htmlFor="Other">Other</label>
                <br/>
                <label htmlFor="otherbox">If you chose other, list the console here:</label>
                <input type="text" id="otherbox"/>
                <br/>
                <p>Of my top 5 games, which have you heard of?</p>
                <input type="checkbox" id="SDV"/>
                <label htmlFor="SDV">Stardew Valley</label>
                <br/>
                <input type="checkbox" id="Zelda"/>
                <label htmlFor="Zelda">The Legend of Zelda</label>
                <br/>
                <input type="checkbox" id="Sims"/>
                <label htmlFor="Sims">The Sims 4</label>
                <br/>
                <input type="checkbox" id="UT"/>
                <label htmlFor="UT">Undertale/Deltarune</label>
                <br/>
                <input type="checkbox" id="Balatro"/>
                <label htmlFor="Balatro">Balatro</label>
                <br/>
                <br/>
                <label htmlFor="genre">Choose Your Favorite Game Genre:</label>
                <select name="subtypes" id="genre">
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulation</option>
                    <option value="RPG">RPG</option>
                </select>
                <br/>
                <br/>

                <p><label htmlFor="pagecomments">Comments/Questions?</label></p>
                <textarea id="pagecomments"></textarea>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}
export default Form2