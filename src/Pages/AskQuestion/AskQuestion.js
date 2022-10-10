import React from 'react';
import Mail from '../../Images/Email.png';
import './AskQuestion.css';
const AskQuestion = () => {
    return (
        <div className='container' id="blogs">
            <h1 className='text-center'>Ask a question free / message me</h1>
            <div className='row' id="world">
                <div className="col-lg-6 col-sm-12 text-center" >
                    <form
                        action="https://formsubmit.co/a4b747078a3b29dda1afcb0752f28eb7" method="POST">

                        <div class="mb-3" style={{ maxWidth: '50%' }}>
                            <label class="form-label">Full Name</label>
                            <input name="name" type="text" class="form-control" required />
                        </div>

                        <div class="mb-3" style={{ maxWidth: '50%' }}>
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3" style={{ maxWidth: '50%' }}>
                            <label class="form-label">Phone (optional)</label>
                            <input name="phone" class="form-control" />
                            <div id="phoneHelp" class="form-text">
                                If you rather talk to a human directly.
                            </div>
                        </div>

                        <div class="mb-3" style={{ maxWidth: '50%' }}>
                            <label class="form-label">Your Message</label>
                            <textarea
                                name="message"
                                class="form-control"
                                rows="3"
                                required
                            ></textarea>
                            <button type="submit" class="btn btn-primary mb-5 mt-3">Submit</button><br />
                        </div>


                    </form>

                </div>
                
                    <div class="col-lg-6 col-sm-12 col-md-12  mt-4">
                        <img className="hi" src={Mail} class=" img-fluid" style={{width:'700px' ,height:'400px'}} />
                    </div>
                

            </div>

        </div>


    );
};

export default AskQuestion;