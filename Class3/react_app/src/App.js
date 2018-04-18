import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Content />
          <Footer />
      </div>
    );
  }
}


class Header extends Component {
    render() {
        return(
            <div className="headerwrapper">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Suckka!</h1>
                </header>
                <Navigation />
            </div>
        );
    }
}

class Navigation extends Component {
    render() {
        return(
            <div className="navwrapper">
                <nav>
                    <div>
                        <Menu />
                    </div>
                </nav>
            </div>
        );
    }
}

class Menu extends Component {
    render() {
        return(
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        );
    }
}

class Content extends Component {
    render() {
        return(
            <div className="contentwrapper">
                <section className="page">
                    <Article />
                    <Sidebar />
                </section>
            </div>
        );
    }
}

class Article extends Component {
    render() {
        return(
            <article>
                <h2>Checkout What We Are Doing With React</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis mattis ex, ut convallis neque tincidunt nec. Donec et urna felis. Sed tincidunt lectus a tellus pellentesque venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non feugiat sem. Etiam ut semper est, quis tempus tellus. Vestibulum diam est, semper vitae tortor nec, imperdiet volutpat lacus. Morbi a est sit amet metus facilisis vehicula sed vel diam. Morbi arcu nisl, pulvinar eget tincidunt pellentesque, pulvinar vitae leo. Morbi et urna quis nisi scelerisque aliquam in et ipsum. Aenean eu porta dolor. Aenean cursus faucibus massa eu ultrices. Morbi rutrum sem id faucibus auctor.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Maecenas laoreet nunc ut odio sodales bibendum quis non odio.</li>
                    <li>Maecenas lacinia dolor et tortor sollicitudin, ut ultrices ex convallis.</li>
                    <li>Nullam pharetra risus ac odio lobortis varius.</li>
                </ul>
                <h2>This Is The Latest Information</h2>
                <p>Etiam vel lacus mi. Integer luctus congue justo quis sollicitudin. Mauris finibus elit at odio viverra cursus. Proin vel eros non nisi aliquet vestibulum at quis massa. Nullam nunc tellus, porttitor nec orci eget, vulputate feugiat libero. In hac habitasse platea dictumst. Nam ut imperdiet eros, nec tincidunt lectus. Morbi congue elementum ante gravida varius. Suspendisse vitae tristique ante.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Maecenas laoreet nunc ut odio sodales bibendum quis non odio.</li>
                    <li>Maecenas lacinia dolor et tortor sollicitudin, ut ultrices ex convallis.</li>
                    <li>Nullam pharetra risus ac odio lobortis varius.</li>
                </ul>
                <p><img src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?dpr=2&auto=format&w=1024" /></p>
            </article>
        );
    }
}



class Sidebar extends Component {
    render() {
        return(
            <aside>
                <div>
                    <h2>Helpfull Links</h2>
                    <Menu />
                </div>
            </aside>
        );
    }
}

class Footer extends Component {

    date = (new Date()).getFullYear();

    render() {
        return(
            <div className="footerwrapper">
                <footer>
                    <p className="copyright">Developed by <a href="http://davidtmeyer.me">David T Meyer</a> | Copyright &copy; {this.date}</p>
                </footer>
            </div>
        );
    }
}


export default App;
