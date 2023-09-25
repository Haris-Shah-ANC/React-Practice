// import logo from './logo.svg';
import './App.css';
// import Something from './components/tutorail';
// import TodoList from './components/jsx';
// // import Profile from './components/props';
// import Gallery from './components/Avatar';
// import { Pic } from './components/Avatar';
// import PackingList from './components/conditionalRendering';
// import { DrinkList } from './components/conditionalRendering';
// import List1 from './components/renderingLists';
// import { RecipeList } from './components/renderingLists';
// import { Poem } from './components/renderingLists';
// import Main from './components/PureComponents';
// import Toolbar from './components/EventHandlers';
// import { EventPropogation } from './components/EventHandlers';
// import Page from './components/State';
// import { Form } from './components/State';
// import { Form1 } from './components/State';
// import { Counter } from './components/State';
// import Form2 from './components/UpdateObjects';
// import { Form3 } from './components/UpdateObjects';
// import { Statue } from './components/UpdateObjects';
// import { ImmerStatue } from './components/UpdateObjects';
// import List, { BucketList, InsertionList, ReversingList, TaskApp } from './components/UpdateArrays'; 
// import { List3 } from './components/UpdateArrays';
// import { CounterList } from './components/UpdateArrays';
// import SomeApp, { Picture } from './components/DeclaritiveUI';
// import FeedbackForm, { Menu, TravelPlanList } from './components/ChooseState';
// import Accordion from './components/SharingState';
// import HoverApp, { Contactmanger, Messenger, Scoreboard } from './components/PreserveAndResetState';
// import HeadingPage, { ProfilePage } from './components/Context';
// import ReducerTaskApp from './components/Reducers';
import RefCounter, { RefForm1, StopWatch, TodoList } from './components/Refs';
// import Form from './components/Form';
// import ValidationForm from './components/ValidationForm';
import FormUsingCompoents from './components/ComponentForm';
import MappingForm from './components/MappingForm';
import { EffectApp } from './components/useEffect';
import FetchAPIFunction from './components/fetchAPI';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <ValidationForm/> */}
      <FormUsingCompoents/>
      <MappingForm/>
      <RefCounter/>
      <StopWatch/>
      <RefForm1/>
      <TodoList />
      <EffectApp />
      <FetchAPIFunction/>
      {/* <Something/>
      <TodoList/> */}
      {/* <Profile/> */}
      {/* <Gallery/>
      <Pic/>
      <PackingList/>
      <DrinkList/>
      <List1/>
      <RecipeList/>
      <Poem/>
      <Main/>
      <Toolbar/> */}
      {/* <EventPropogation/> */}
      {/* <Page/>
      <Form/>
      <Form1/>
      <Counter/>
      <Form2/>
      <Form3/>
      <Statue/>
      <ImmerStatue/>
      <List/>
      <List3/>
      <CounterList/>
      <InsertionList/>
      <ReversingList/>
      <BucketList/>
      <TaskApp/>
      <SomeApp/>
      <Picture/>
      <FeedbackForm/>
      <Menu/> */}
      {/* <TravelPlan/> */}
      {/* <TravelPlanList/>
      <Accordion/>
      <HoverApp/>
      <Scoreboard/>
      <Messenger/>
      <Contactmanger/>
      <HeadingPage/>
      <ProfilePage/>
      <ReducerTaskApp/>
      <RefForm/> */}
    </div>
  );
}

export default App;
