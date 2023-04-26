import React from "react";

export default function RequestForm() {
    return (
        <div className="border-2">
            <form action="" method="">
                <div>
                    <input type="text" placeholder="First" required></input>
                    <input type="text" placeholder="Last" required></input>
                </div>
                <div>
                    <input type="phone" placeholder="Phone" required></input>
                    <input type="email" placeholder="Email" required></input>
                </div>

                <textarea type="text" placeholder="Message" required></textarea>
                <p>I am not a robot</p>
                <button type="submit">Request Quote</button>
                <p>
                    Your privacy and security are our top priorities. We never
                    sell or share your data with third-party companies and use
                    standard security measures to protect your information.
                </p>
            </form>
        </div>
    );
}
