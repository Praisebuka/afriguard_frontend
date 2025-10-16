const settings: { [key: string]: string | undefined } = {
  // example values, replace with actual data
  title: '',
  subtitle: '',
  youtube_link: ''
};

const IntroSection = () => (
  <section id="intro">
    <div className="intro-container wow fadeIn">
      <h1 className="mb-4 pb-0" dangerouslySetInnerHTML={{ __html: settings.title ?? '' }}></h1>
      <p className="mb-4 pb-0">{settings.subtitle ?? ''}</p>
      {settings.youtube_link && (
        <a
          href={settings.youtube_link}
          className="venobox play-btn mb-4"
          data-vbtype="video"
          data-autoplay="true"
        ></a>
      )}
      <a href="#about" className="about-btn scrollto">
        About AfriGuard
      </a>
    </div>
  </section>
);

export default IntroSection;