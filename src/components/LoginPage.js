const LoginPage = () => {
  return (
    <section className="container login-page">
      <p>
        <img
          src="Union.png"
          alt="Union"
          width={25}
          height="25px"
          className="img-first"
        />
        <img src="lendsqr.png" alt="Lendsqr" width={138} height="36px" />
      </p>

      <div className="row Login">
        <article className="col-sm-6">
          <img src="pablo-sign-in.png" alt="" />
        </article>
        <article className="col-sm-6 login-form">
          <h3>Welcome!</h3>
          <p>Enter Details to login.</p>
          <form>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="login-email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="login-password"
                placeholder="Password"
              />
            </div>

            <p>Forgot Password ?</p>
            <button>LOG IN</button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default LoginPage;
