import '../City/city.css'

export default function City() {
    return (
        <div className="city-container">
            <form className="form">
                <strong>Select City</strong>
                <span>
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter postal code"
                    />
                    <button className="button" type="submit">Submit</button>
                </span>
            </form>
        </div>
    );
}