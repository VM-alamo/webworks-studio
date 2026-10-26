/*
  WEBWORKS STUDIO — WEEK 10

  TODO:
  Turn this file into a reusable React component.

  The component should:
  - be named ServiceCard;
  - receive changing service information through props;
  - return the semantic <article> markup used by the starter cards;
  - display categoryLabel, title, description, and detail;
  - export the component as default.

  Do not hard-code one specific service into this component.
*/

function ServiceCard({ categoryLabel, title, description, detail }) {
  return (
    <article className="service-card">
      <p className="service-category">{categoryLabel}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="service-detail">{detail}</p>
    </article>
  )
}

export default ServiceCard
