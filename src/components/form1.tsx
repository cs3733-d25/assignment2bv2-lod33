const Form1 = () => {
    return (
        <form>
            {/*<!-- Condensed -->*/}
            <div className="inline-group">
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="drink">Drink Ordered:</label>
                    <input type="text" id="drink" name="drink"/>
                </div>
            </div>

            {/*<!-- Checkboxes -->*/}
            <div className="inline-group">
                <label>Positive Aspects:</label>
                <label><input type="checkbox" id="atmosphere" name="positives" value="atmosphere"/> Atmosphere</label>
                <label><input type="checkbox" id="service" name="positives" value="service"/> Service</label>
                <label><input type="checkbox" id="drinks" name="positives" value="drinks"/> Drinks</label>
            </div>

            {/*<!-- Radio buttons -->*/}
            <div className="inline-group">
                <label>My experience was...</label>
                <label><input type="radio" id="outstanding" name="rating" value="outstanding"/> Outstanding</label>
                <label><input type="radio" id="mid" name="rating" value="mid"/> Mid</label>
                <label><input type="radio" id="poor" name="rating" value="poor"/> Poor</label>
            </div>

            {/*<!-- Textarea -->*/}
            <label htmlFor="comments">Additional Comments:</label>
            <textarea id="comments" name="comments"></textarea>

            {/*<!-- Dropdown -->*/}
            <label htmlFor="regular">Would you come in again?</label>
            <select id="regular" name="regular">
                <option value="yes">Yes</option>
                <option value="absolutely">Absolutely</option>
                <option value="illBeThere">I'll be there</option>
            </select>

            {/*<!-- Submit -->*/}
            <button type="submit">Submit Review</button>
        </form>
    )
}
export default Form1