import React from 'react';
import './css/App.css';
import './css/Main.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import mainsAT from './APIs/mains'
import projectsAT from './APIs/projects'


class App extends React.Component {
  state = {
    mainsData: [],
    projectsData: []
  }

  runAPIs = async () => {
    const mainsData = await mainsAT();
    const projectsData = await projectsAT();
    await this.setState(prevState => ({
      mainsData: mainsData,
      projectsData: projectsData}));

    console.log('projects data:',this.state.projectsData)
    console.log('main content', this.state.mainsData);
  }

  componentDidMount = () => {
    this.runAPIs();
  }

  render() {

    return (
      <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/projects'
            render={(props) =>
              <Projects{...props}
                data={this.state.projectsData}/>}/>
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
      <Footer />
      </div>
    );
  }
}

export default App
