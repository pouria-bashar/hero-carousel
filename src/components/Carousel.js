import styles from './Carousel.scss';
import React from 'react';
import data from './data.json';

class Carousel extends React.Component{

  state = {
    activeIndex: 0,
  }

  renderCarouselImages() {
    const { carousel } = data;
    const { activeIndex } = this.state;

    return carousel.map((item, index) => {
      const activeClassName = activeIndex === index ? styles.slideIn : styles.slideOut;
      const className = `${styles.mainImage} ${activeClassName}`;
      return (
        <img
          src = {require(`./${item.imageurl}`)}
          className={className}
          key={index}
        />
      )
    })
  }
  renderListNavigation() {
    const { carousel } = data;
    return (
      <ol>
        {
          carousel.map((item, index) => (
              <li
                className={this.state.activeIndex === index ? styles.active : '' }
                key={index}
                onClick={() => this.setState({ activeIndex: index })}>
              </li>
            )
          )
        }
      </ol>
    )
  }
  handleNext() {
    const { carousel } = data;
    const { activeIndex } = this.state;
    let index = activeIndex +1;
    if (index === carousel.length ) index = 0;
    this.setState({ activeIndex: index })
  }
  handlePrevious() {
    const { carousel } = data;
    const { activeIndex } = this.state;
    let index = activeIndex -1;
    if (index < 0 ) index = carousel.length - 1;
    this.setState({ activeIndex: index });
  }
  render(){
    const { carousel } = data;
    const { activeIndex } = this.state;
    const activeMovie = carousel[activeIndex];

    return (
      <section className={styles.container}>
        <div className={styles.carousel}>
          <figure className={styles.image}>
            {::this.renderCarouselImages()}
            <div
              className={`${styles.navigation} ${styles.next}`}
              onClick={::this.handleNext}
            >
              <span>{'>'}</span>
            </div>
            <div
              className={`${styles.navigation} ${styles.previous}`}
              onClick={::this.handlePrevious}
              >
              <span>{'<'}</span>
            </div>
            <div
              className={`${styles.navigation} ${styles.list}`}
            >
              { ::this.renderListNavigation() }
            </div>
          </figure>
          <div className={styles.movieInfo}>
            <div className={styles.movieTitle}>
              <h1>{activeMovie.title}</h1>
            </div>
            <div className={styles.movieDescription}>
              <span>{activeMovie.synopsis}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Carousel;
