import toast from 'react-hot-toast'

const ResetPassword = () => {
    const handlePasswordReset=(e)=>{
        e.preventDefault()
        const form=new FormData(e.target)
        const email=form.get('email')
        console.log(email);
        const email2=e.target.email.value 
        console.log(email2);
        toast('Reset email sent to your email')
    }
    return (
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <a
          onClick={() => document.getElementById("my_modal_3").showModal()}
          rel="noopener noreferrer"
          href="#"
        >
          Forgot Password?
        </a>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <div className="flex flex-col space-y-3">
                <input
                  placeholder="Enter your email"
                  type="email"
                  className="input bg-base-200"
                  name="email"
                  required
                />
                <button
                  onClick={handlePasswordReset}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    );
};

export default ResetPassword;