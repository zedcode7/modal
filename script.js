//inner popup
var innermodal = document.getElementById("inner_mod_b");
var innermodalBtn = document.getElementById("get_price");
var innercloseBtn = document.getElementsByClassName("closebutton_inner")[0];

//inner popup
innermodalBtn.addEventListener("click", openinnerModal);
innercloseBtn.addEventListener("click", closeinnerModal);
window.addEventListener("click", clickinnerOutside);

function openinnerModal() {
  innermodal.style.display = "block";
  modal.style.display = "none";
}
function closeinnerModal() {
  innermodal.style.display = "none";
}
function clickinnerOutside(e) {
  if (e.target === innermodal) {
    innermodal.style.display = "none";
  }
}



//////////////////////////////////////////////////////////////////////////////////////////////////

/*
<style>

.showcas {
  width: 100%;
  height: 90vh;
  background: url(./1573540692imageedit59749599349.jpg);
  background-size: cover;
  position: relative;
  font-family: "Heebo", sans-serif, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.inpts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2%;
}
.form_of {
  background: #ffffff;
  padding: 1rem;
}

.modal {
  max-height: 300;
  max-width: 900px;
  box-sizing: border-box;
  margin-top: 20vh;
  margin-left: auto;
  margin-right: auto;
  animation-name: modalOpen;
  animation-duration: 0.6s;
}

.inpts select,
.inpts input {
  width: 100%;
  height: 30px;
  background-color: #ededed;
  padding: 2px;
  border: 1px solid #bbb;
  color: #4e4e4e;
}
.form_of .required {
  color: #e26171;
}
.form_of input[type="submit"] {
  background-color: rgb(255, 0, 0);
  display: block;
  width: 100%;
  padding: 15px;
  border: 1px solid;
  color: #fff;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
}
#modal_body {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.34);

  margin: 0;
  padding: 0;
  overflow: auto;
  display: none;
  z-index: 1000;
}

.right_content {
  background-color: rgb(226, 17, 17);
  display: inline-block;
  text-align: left;
  padding: 0.9rem 2rem 0.56rem 1rem;
  position: absolute;
  right: 0;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  top: 1.4rem;
  margin-bottom: 1.5rem;
  color: #fff;
  cursor: pointer;
}
.contact_text {
  font-size: 0.875rem;
  display: block;
  font-weight: 400;
  line-height: 1.1;
}
.contact_link {
  display: block;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  padding: 0.4rem 0;
}
.contact_link:hover {
  color: #cccdcc;
}

.show_tec {
  position: relative;
  z-index: 2;
  width: 84%;
  margin: auto;
  padding: 4.3rem 3rem;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.button_show {
  padding: 1rem 4.6rem;
  border-radius: 3rem;
  background-color: rgb(255, 0, 0);
  border-color: rgb(255, 0, 0);
  margin: 0.5rem;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
}
.sub_title {
  font-size: 2rem;
}
.title h1 {
  font-size: 4.3rem;
}
.button_show:focus,
.button_show:hover {
  box-shadow: 0 0 0 0.2rem rgba(66, 183, 233, 0.5);
  color: #fff;
}
.modal_bar {
  display: grid;
  grid-template-columns: 90% 10%;
}
.modal_bar h3 {
  text-align: center;
  text-transform: uppercase;
  margin-left: 13%;
}
.modal_bar .close_button {
  text-align: right;
  font-size: 3em;
  margin-top: -10px;
  color: #999999;
  cursor: pointer;
}
.modal_bar .close_button:hover,
.modal_bar .close_button:focus {
  color: #000000;
}
.indust {
  border-bottom: 1px solid #cccdcc;
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: center;
}
.indust a {
  color: #444444;
  text-decoration: none;
  font-size: 1.2rem;
}
.ind_img {
  max-height: 60px;
  max-width: 80px;
  display: inline-block;

  margin: 0 1rem;
}
.ind_img img {
  max-height: 100%;
  max-width: 100%;
}

/*inner popup*/

/*
.modal_ind {
  height: 240px;
  max-width: 70%;
  background: #fff;
  padding: 1rem;
  box-sizing: border-box;
  margin-top: 20vh;
  margin-left: auto;
  margin-right: auto;
  animation-name: modalOpen;
  animation-duration: 0.6s;
}
#inner_mod_b {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.34);
  display: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  display: ;
  z-index: 1001;
}
.inn_mod_hed {
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.4rem;
}
.inn_mod_hed h3 {
  display: grid;

  margin: 0 auto;

  place-content: center;
}
.inn_mod_hed .#closebutton_inner {
}
.inn_mod_hed .closebutton_inner {
  text-align: right;
  font-size: 3em;
  margin-top: -10px;
  color: #999999;
  cursor: pointer;
  font-weight: bold;
}
.closebutton_inner:hover,
.closebutton_inner:hover {
  color: #000000;
}
.servises {
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 2rem 0;
}
.servises .c {
  width: 120px;
  height: 60px;
  display: inline-block;
  font-weight: 500;
  color: #575e68;
  text-decoration: none;
  text-transform: uppercase;
  padding-right: 15px;

  padding-left: 15px;
}
.servises .c img {
  width: 90px;
  height: 100%;
}
@keyframes modalOpen {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}



</style>
<script>

var modal = document.getElementById("modal_body");
var modalBtn = document.getElementById("get_price");
var closeBtn = document.getElementsByClassName("close_button")[0];

//inner popup

var innermodal = document.getElementById("inner_mod_b");
var innermodalBtn = document.getElementById("get_ind_modal");
var innercloseBtn = document.getElementsByClassName("closebutton_inner")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
//inner popup
innermodalBtn.addEventListener("click", openinnerModal);
innercloseBtn.addEventListener("click", closeinnerModal);
window.addEventListener("click", clickinnerOutside);

function openinnerModal() {
  innermodal.style.display = "block";
  modal.style.display = "none";
}
function closeinnerModal() {
  innermodal.style.display = "none";
}
function clickinnerOutside(e) {
  if (e.target === innermodal) {
    innermodal.style.display = "none";
  }
}



</script>


  <div id="inner_mod_b">
      <div class="modal_ind">
        <div class="inn_mod_hed">
          <h3>Select Industry</h3>
          <span class="closebutton_inner">&times;</span>
        </div>
        <div class="servises">
          <a href="#" class="home c "
            ><img src="./home.png" alt="home cleaning" />home cleaning</a
          >
          <a href="#" class="stem c"
            ><img src="./stem.png" alt="stem cleaning" />stem cleaning</a
          >
        </div>
      </div>
    </div>

    <div id="modal_body">
      <div class="modal">
        <div class="form_of">
          <div class="modal_bar">
            <h3>select Industry</h3>

            <span class="close_button">&times;</span>
          </div>

          <div class="inpts">
            <!-----grid-->
            <div class="f-element">
              <label>First Name<span class="required">*</span></label>
              <p></p>
              <div class="form-input">
                <span class="wpcf7-form-control-wrap your-name"
                  ><input
                    type="text"
                    name="your-name"
                    value=""
                    size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    aria-required="true"
                    aria-invalid="false"
                /></span>
              </div>
              <p></p>
            </div>
            <div class="f-element">
              <label>Email<span class="required">*</span></label>
              <p></p>
              <div class="form-input">
                <span class="wpcf7-form-control-wrap your-email"
                  ><input
                    type="email"
                    name="your-email"
                    value=""
                    size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                    aria-required="true"
                    aria-invalid="false"
                /></span>
              </div>
              <p></p>
            </div>
            <div class="f-element">
              <label>Phone Number<span class="required">*</span></label>
              <p></p>
              <div class="form-input">
                <span class="wpcf7-form-control-wrap phone"
                  ><input
                    type="tel"
                    name="phone"
                    value=""
                    size="40"
                    class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                    aria-required="true"
                    aria-invalid="false"
                /></span>
              </div>
              <p></p>
            </div>
          </div>
          <div class="inpts selects">
            <div class="f-element">
              <label>Type of service</label>
              <p></p>
              <div class="form-input">
                <span class="wpcf7-form-control-wrap services"
                  ><select
                    name="services"
                    class="wpcf7-form-control wpcf7-select"
                    aria-invalid="false"
                  >
                    <option value="Regular Cleaning">Regular Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="End of Tenancy Clean"
                      >End of Tenancy Clean</option
                    >
                  </select></span
                >
              </div>
              <p></p>
            </div>
            <div class="f-element">
              <label>Bedrooms</label>
              <p></p>
              <div class="form-input">
                <span class="wpcf7-form-control-wrap bed bedrooms"
                  ><select
                    name="bedrooms"
                    class="wpcf7-form-control wpcf7-select"
                    aria-invalid="false"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select></span
                >
              </div>
              <p></p>
            </div>
            <div class="f-element">
              <label>Bathrooms</label>
              <p></p>
              <div class="form-input">
                <span class="wpcf7-form-control-wrap bathrooms"
                  ><select
                    name="bathrooms"
                    class="wpcf7-form-control wpcf7-select"
                    aria-invalid="false"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select></span
                >
              </div>
              <p></p>
            </div>
          </div>

          <p>
            <input
              id="get_ind_modal"
              type="submit"
              value="Get a price"
              class="wpcf7-form-control wpcf7-submit"
            />
          </p>
        </div>
      </div>
    </div>
    <!----popup end-->
    <section class="showcas">
      <div class="right_content">
        <span class="contact_text ">Give Us A Call:</span>
        <a class="contact_link" href="tel: 888-637-7774">888-637-7774</a>
      </div>

      <div class="show_tec">
        <div class="title">
          <h1 style="color: rgb(14, 14, 13);" class="h1_title">
            Killeen Steam Team
          </h1>
        </div>
        <div class="sub_title">
          <h4 style="color: rgb(11, 11, 11);">
            House Cleaning Services and Carpet Cleaning Services thats
            affordable
          </h4>
        </div>
        <div class="show_btn">
          <a href="#" id="get_price" class="button_show">View price</a>
          <a href="#" class="button_show">Our Service</a>
        </div>
      </div>
    </section>


    */
