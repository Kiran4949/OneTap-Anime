import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Data from "./components/Data/Data";
import SubbedAnime from "./components/Categories/SubbedAnime/SubbedAnime"; 
import DubbedAnime from "./components/Categories/DubbedAnime/DubbedAnime";
import Movies from "./components/Categories/Movies/Movies"; 
import Ova from "./components/Categories/Ova/Ova"; 
import WatchOnlineSub from "./components/WatchOnlineSub/WatchOnlineSub"; 
import WatchOnlineDub from "./components/WatchOnlineDub/WatchOnlineDub"; 
import Top10Anime from "./components/Categories/Top10Anime/Top10Anime";
import Genres from "./components/Genres/Genres/Genres";
import Footer from "./components/Footer/Footer";
import Special from "./components/Categories/Special/Special";
import RecentlyUpdated from "./components/Categories/RecentlyUpdated/RecentlyUpdated";
import RecentlyAdded from "./components/Categories/RecentlyAdded/RecentlyAdded";
import Ona from "./components/Categories/Ona/Ona";
import MostPopular from "./components/Categories/MostPopular/MostPopular";
import MostFavorite from "./components/Categories/MostFavorite/MostFavorite";
import Completed from "./components/Categories/Completed/Completed";
import Tv from "./components/Categories/Tv/Tv";
import Action from "./components/Genres/Action/Action";
import Adventure from "./components/Genres/Adventure/Adventure";
import Cars from "./components/Genres/Cars/Cars";
import Comedy from "./components/Genres/Comedy/Comedy";
import Dementia from "./components/Genres/Dementia/Dementia";
import Demons from "./components/Genres/Demons/Demons";
import Drama from "./components/Genres/Drama/Drama";
import Ecchi from "./components/Genres/Ecchi/Ecchi";
import Fantasy from "./components/Genres/Fantasy/Fantasy";
import Game from "./components/Genres/Game/Game";
import Harem from "./components/Genres/Harem/Harem";
import Historical from "./components/Genres/Historical/Historical";
import Horror from "./components/Genres/Horror/Horror";
import Isekai from "./components/Genres/Isekai/Isekai";
import Josei from "./components/Genres/Josei/Josei";
import Kids from "./components/Genres/Kids/Kids";
import Magic from "./components/Genres/Magic/Magic";
import MartialArts from "./components/Genres/MartialArts/MartialArts";
import Mecha from "./components/Genres/Mecha/Mecha";
import Military from "./components/Genres/Military/Military";
import Music from "./components/Genres/Music/Music";
import Mystery from "./components/Genres/Mystery/Mystery";
import Parody from "./components/Genres/Parody/Parody";
import Police from "./components/Genres/Police/Police";
import Psychological from "./components/Genres/Psychological/Psychological";
import Romance from "./components/Genres/Romance/Romance";
import Samurai from "./components/Genres/Samurai/Samurai";
import School from "./components/Genres/School/School";
import SciFi from "./components/Genres/SciFi/SciFi";
import Seinen from "./components/Genres/Seinen/Seinen";
import Shoujo from "./components/Genres/Shoujo/Shoujo";
import ShoujoAi from "./components/Genres/ShoujoAi/ShoujoAi";
import Shounen from "./components/Genres/Shounen/Shounen";
import ShounenAi from "./components/Genres/ShounenAi/ShounenAi";
import SliceOfLife from "./components/Genres/SliceOfLife/SliceOfLife";
import Space from "./components/Genres/Space/Space";
import Sports from "./components/Genres/Sports/Sports";
import SuperPower from "./components/Genres/SuperPower/SuperPower";
import Thriller from "./components/Genres/Thriller/Thriller";
import Vampire from "./components/Genres/Vampire/Vampire";
import Supernatural from "./components/Genres/Supernatural/SuperNatural";
import AnimeSearch from "./components/AnimeSearch/AnimeSearch";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";



function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data/:id" element={<Data />} />
          <Route path="/subbed-anime" element={<SubbedAnime />} />
          <Route path="/dubbed-anime" element={<DubbedAnime />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/ova" element={<Ova />} />
          <Route path="/top10anime" element={<Top10Anime />} />
          <Route path="/genre" element={<Genres />} />
          <Route path="/special" element={<Special />} />
          <Route path="/recently-updated" element={<RecentlyUpdated />} />
          <Route path="/recently-added" element={<RecentlyAdded />} />
          <Route path="/ona" element={<Ona />} />
          <Route path="/most-popular" element={<MostPopular />} />
          <Route path="/most-favorite" element={<MostFavorite />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/tv" element={<Tv />} />

          <Route path="/genre/Action" element={<Action />} />
          <Route path="/genre/adventure" element={<Adventure />} />
          <Route path="/genre/cars" element={<Cars />} />
          <Route path="/genre/comedy" element={<Comedy />} />
          <Route path="/genre/dementia" element={<Dementia />} />
          <Route path="/genre/demons" element={<Demons />} />
          <Route path="/genre/drama" element={<Drama />} />
          <Route path="/genre/ecchi" element={<Ecchi />} />
          <Route path="/genre/fantasy" element={<Fantasy />} />
          <Route path="/genre/game" element={<Game />} />
          <Route path="/genre/harem" element={<Harem />} />
          <Route path="/genre/historical" element={<Historical />} />
          <Route path="/genre/horror" element={<Horror />} />
          <Route path="/genre/isekai" element={<Isekai />} />
          <Route path="/genre/josei" element={<Josei />} />
          <Route path="/genre/kids" element={<Kids />} />
          <Route path="/genre/magic" element={<Magic />} />
          <Route path="/genre/martial arts" element={<MartialArts />} />
          <Route path="/genre/mecha" element={<Mecha />} />
          <Route path="/genre/military" element={<Military />} />
          <Route path="/genre/music" element={<Music />} />
          <Route path="/genre/mystery" element={<Mystery />} />
          <Route path="/genre/parody" element={<Parody />} />
          <Route path="/genre/police" element={<Police />} />
          <Route path="/genre/psychological" element={<Psychological />} />
          <Route path="/genre/romance" element={<Romance />} />
          <Route path="/genre/samurai" element={<Samurai />} />
          <Route path="/genre/school" element={<School />} />
          <Route path="/genre/sci-fi" element={<SciFi />} />
          <Route path="/genre/seinen" element={<Seinen />} />
          <Route path="/genre/shoujo" element={<Shoujo />} />
          <Route path="/genre/shoujo ai" element={<ShoujoAi />} />
          <Route path="/genre/shounen" element={<Shounen />} />
          <Route path="/genre/shounen ai" element={<ShounenAi />} />
          <Route path="/genre/slice of life" element={<SliceOfLife />} />
          <Route path="/genre/space" element={<Space />} />
          <Route path="/genre/sports" element={<Sports />} />
          <Route path="/genre/supernatural" element={<Supernatural />} />
          <Route path="/genre/super power" element={<SuperPower />} />
          <Route path="/genre/thriller" element={<Thriller />} />
          <Route path="/genre/vampire" element={<Vampire />} />

          <Route path="/wos/:animeId" element={<WatchOnlineSub />} />
          <Route path="/wod/:animeId" element={<WatchOnlineDub />} />
          <Route path="/search" element={<AnimeSearch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
