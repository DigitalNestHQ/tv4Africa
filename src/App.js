import React from "react"
import { pageurl } from "./utils/constants.js"
import { Route, Switch } from "react-router-dom"
import HomePage from "./components/homepage/homepage"
import AboutUs from "./components/about/AboutComponent"
import TermsAndConditions from "./components/privacyPolicy/TermsAndConditions"
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy"
import Login from "./components/login/Login"
import Signup from "./pages/register/Signup"
import Subscribe from "./components/subscription/Subscribe"
import ContactUs from "./components/ContactUs/index"
import NewsFeeds from "./components/generalNews/News"
import { CodeOfEthics } from "./components/ethicscode/CodeOfEthics"
import CategoryNews from "./components/category/CategoryNews"
import PodcastHome from "./podcast/home/PodcastHome.js"
import LatestDaily from "./components/reusables/news/LatestDaily"
import Error404 from "./components/error404/error404"
import CurrentPodCast from "./podcast/home/currentPodcast/CurrentPodCast"
import CurrentPodCastPlayer from "./podcast/home/livepodcastalert/CurrentPodCastPlayer"
import { SuccessPage } from "./components/homepage/homepageSubscribeSection/SuccessPage.js"
import Faq from "./components/faq/Faq.js"
import { Advertising } from "./components/advertising/Advertising"
import SubcategoryNews from "./components/category/SubcategoryNews"
import { WriteForUs } from "./components/writeforus/WriteForUs"
import NewState from "./context/news/NewState"
import Copyright from "./components/privacyPolicy/Copyright"

import SearchNews from "./components/generalNews/searchComponent/SearchNews"
import { SoundLayer } from "./context/podcast/SoundLayer"
import soundReducer, { soundInitialState } from "./context/podcast/soundReducer"
import AuthState from "./context/auth/AuthState"
import AlertState from "./context/alert/AlertState"
import ScrollTopBotton from "./components/reusables/scrollButton/ScrollTopBotton"
import "./../src/components/reusables/utilities/index.css"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
        <AuthState>
          <AlertState>
            <NewState>
              <Switch>
                <Route exact path={pageurl.HOMEPAGE} component={HomePage} />
                <Route
                  exact
                  path={pageurl.PRIVACYPOLICY}
                  component={PrivacyPolicy}
                />
                <Route exact path="/copyright" component={Copyright} />
                <Route exact path={pageurl.SUBSCRIBE} component={Subscribe} />
                <Route exact path={pageurl.FAQ} component={Faq} />
                <Route
                  exact
                  path={pageurl.ADVERTISING}
                  component={Advertising}
                />
                <Route
                  exact
                  path={pageurl.SIGNUPSUCCESSFUL}
                  component={SuccessPage}
                />
                <Route exact path="/about" component={AboutUs} />
                <Route
                  exact
                  path={pageurl.CODEOFETHICS}
                  component={CodeOfEthics}
                />
                <Route exact path={pageurl.WRITEFORUS} component={WriteForUs} />
                <Route exact path="/post/:slug" component={NewsFeeds} />
                <Route exact path="/latest/:slug" component={LatestDaily} />
                <Route exact path="/news/categories" component={CategoryNews} />
                <Route exact path="/search" component={SearchNews} />
                <Route
                  exact
                  path="/news/sub-categories"
                  component={SubcategoryNews}
                />
                <Route exact path={pageurl.PODCAST} component={PodcastHome} />
                <Route
                  exact
                  path="/podcast/single/:collectionId"
                  component={CurrentPodCastPlayer}
                />
                <Route
                  exact
                  path="/podcast/:collectionId"
                  component={CurrentPodCast}
                />
                <Route
                  exact
                  path={pageurl.TERMSANDCONDITIONS}
                  component={TermsAndConditions}
                />
                <Route path="/login" component={Login} />
                <Route exact path={pageurl.CONTACTUS} component={ContactUs} />
                <Route exact path={pageurl.SIGNUP} component={Signup} />
                <Route component={Error404} />
              </Switch>
              <ScrollTopBotton />
            </NewState>
          </AlertState>
        </AuthState>
      </SoundLayer>
    </div>
  )
}

export default App
