import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo.JPG';

export default function ParamsExample() {
  return (
    <Router>
      <div className="flex-container-tabBar">
        <div className="row">
          <div className="tabBar">
            <ul id="tabBar_nav">
              <li>
                <Link class="active" to="/">
                  {' '}
                  PERSONAL
                </Link>
              </li>
              <li>
                <Link to="/Main2">ADDITIONAL</Link>
              </li>
              <li>
                <Link to="/Main3">REFERENCES</Link>
              </li>
              <li>
                <Link to="/Main4">DOCUMENTS</Link>
              </li>
              <li>
                <Link to="/SigninContainer">LOGIN</Link>
              </li>
            </ul>

            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/Main2">
                <Main2 />
              </Route>
              <Route path="/Main3">
                <Main3 />
              </Route>
              <Route path="/Main4">
                <Main4 />
              </Route>
              <Route path="/SigninContainer">
                <SigninContainer />
              </Route>
              <Route path="/ForgotPassword">
                <ForgotPassword />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Main() {
  const [isAuth, setIsAuth] = useState();
  if (isAuth) {
    return <Redirect to="/Main2" />;
  }

  return (
    <div className="flex-container ">
      <div className="main__title">
        <h2>PERSONAL DETAILS</h2>
        <hr />
      </div>
      <form action="" method="post" novalidate>
        <div className="details_form ">
          <div>
            <input
              id="name"
              name="name"
              placeholder="FIRSTNAME"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter FirstName
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="LASTNAME"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter Lastname
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="DOB"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter DOB
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="PHONE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter PHONE
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="TENURE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter TENURE
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="GENDER"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter GENDER
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="EMAIL ID"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter EMAIL ID
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="LOAN AMOUNT"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter LOAN AMOUNT
            </span>
          </div>
        </div>
      </form>
      <div className="main__title">
        <h2>IDENTITY DETAILS</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="PERMENANT ACCOUNT NUMBER "
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter PERMENANT ACCOUNT NUMBER
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="AADHAAR NUMBER"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter AADHAAR NUMBER
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="VOTER ID"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter VOTER ID
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="VOTER ID STATE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter "VOTER ID STATE
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="PASSPORT"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter PASSPORT
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="DRIVING LICENSE STATE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter DRIVING LICENSE STATE
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="DRIVING LICENSE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter DRIVING LICENSE
            </span>
          </div>
        </div>
      </form>
      <div className="main__title">
        <h2>ADDRESS</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="PRESENT ADDRESS"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter PRESENT ADDRESS
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="CITY"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter CITY
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="STATE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter STATE
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="PINCODE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter PINCODE
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="PERMENANT ADDRESS"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter PERMENANT ADDRESS
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="CITY"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter CITY
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="STATE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter STATE
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="PINCODE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter PINCODE
            </span>
          </div>
        </div>
      </form>

      <button
        type="submit"
        id="sub-btn"
        onClick={() => setIsAuth(true)}
        value="register"
      >
        SUBMIT
      </button>
    </div>
  );
}

function Main2() {
  const [isAuth, setIsAuth] = useState();
  if (isAuth) {
    return <Redirect to="/Main3" />;
  }
  return (
    <div className="flex-container">
      <div className="main__title">
        <h2>GENERAL INFORMATION</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="EMPLOYER NAME"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter EMPLOYER NAME
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="OFFICE EMAIL"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter OFFICE EMAIL
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="TOTAL EXPERIENCE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter TOTAL EXPERIENCE
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="OFFICE PHONE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter OFFICE PHONE
            </span>
          </div>
        </div>
      </form>
      <div className="main__title">
        <h2>BANK DETAILS</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="BANK ACCOUNT NUMBER"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter BANK ACCOUNT NUMBER
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="BANK BRANCH"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter BANK BRANCH
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="IFSC CODE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter IFSC CODE
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="BANK NAME"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter BANK NAME
            </span>
          </div>
        </div>
      </form>

      <button type="submit" id="sub-btn" onClick={() => setIsAuth(true)}>
        {' '}
        SUBMIT
      </button>
    </div>
  );
}

function Main3() {
  const [isAuth, setIsAuth] = useState();
  if (isAuth) {
    return <Redirect to="/Main4" />;
  }
  return (
    <div className="flex-container mt-30">
      <div className="main__title">
        <h2>PREFERENCES</h2>
        <hr />
      </div>
      <form>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="PREFERENCE NAME 1"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter PREFERENCE NAME 1
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="ADDRESS"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter ADDRESS
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="PHONE NUMBER"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter PHONE NUMBER
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="ADDRESS"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:CITY
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="STATE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter STATE
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="PINCODE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:PINCODE
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="PREFERENCE NAME 2"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter PREFERENCE NAME 2
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="ADDRESS"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:Enter ADDRESS
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="PHONE NUMBER"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter PHONE NUMBER
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="ADDRESS"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:CITY
            </span>
          </div>
        </div>
        <div className="details_form">
          <div>
            <input
              id="name"
              name="name"
              placeholder="STATE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format: Enter STATE
            </span>
          </div>

          <div>
            <input
              id="name"
              name="name"
              placeholder="PINCODE"
              required
              pattern="[A-Za-z-0-9]+\s[A-Za-z-'0-9]+"
              title="firstname lastname"
              aria-required="true"
              aria-describedby="name-format"
            />
            <span id="name-format" class="help">
              Format:PINCODE
            </span>
          </div>
        </div>
      </form>

      <button type="submit" id="sub-btn" onClick={() => setIsAuth(true)}>
        SUBMIT
      </button>
    </div>
  );
}
function Main4() {
  const [setFile] = React.useState('');
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }
  return (
    <div className=" mt-30 flex-container-document">
      <h2>Document Uplode</h2>
      <div id="upload-box">
        <input type="file" onChange={handleUpload} />
      </div>
    </div>
  );
}

function SigninContainer() {
  const [isAuth, setIsAuth] = useState();
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div className="flex-container">
      <div className={'signinBox'}>
        <div className={'leftBox'}>
          <div className={'imageLogo'}>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className={'rightBox'}>
          <div className={'box'}>
            <div className={'titleBox'}>LOGIN</div>
            <div className={'inputSBox'}>
              <input
                className={'inputS'}
                type={'text'}
                placeholder={'Username'}
              />
            </div>
            <div className={'inputSBox'}>
              <input
                className={'inputS'}
                type={'password'}
                placeholder={'Password'}
              />
            </div>
            <div className={'text-1'}>
              <Link to="/ForgotPassword">Forgot password ?</Link>
            </div>
            <button className={'btn-submit'} onClick={() => setIsAuth(true)}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ForgotPassword() {
  const [isAuth, setIsAuth] = useState();
  if (isAuth) {
    return alert('Main Send on your Account');
  }
  return (
    <div className="flex-container">
      <div className={'signInBox'}>
        <div className={'leftBox'}>
          <div className={'imageLogo'}>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className={'rightBox'}>
          <div className={'box'}>
            <div className={'titleBox'}>FORGOT PASSWORD ?</div>
            <div className={'text-1'}>
              We Will send a reset link to your Email ID to reset Password
            </div>
            <div className={'inputSBox'}>
              <input
                className={'inputS'}
                type={'text'}
                placeholder={'Email ID'}
              />
            </div>

            <div className={'btn-submit'} onClick={() => setIsAuth(true)}>
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
