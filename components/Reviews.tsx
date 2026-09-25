const reviews = [
  {
    initials: "AM",
    name: "Amelia M.",
    note: "Passed first time",
    quote:
      "My instructor was calm, patient and explained everything clearly. I felt much more confident after just a few lessons.",
  },
  {
    initials: "JL",
    name: "Jordan L.",
    note: "Brisbane learner",
    quote:
      "Booking online was easy and I could see every available time. The lesson reminders were really helpful too.",
  },
  {
    initials: "SK",
    name: "Sarah K.",
    note: "Provisional licence",
    quote:
      "Great value and a very professional instructor. We practised the local test routes and I passed with confidence.",
  },
  {
    initials: "HN",
    name: "Hannah N.",
    note: "Melbourne learner",
    quote:
      "I compared a few instructors, picked one that suited my schedule, and booked the same afternoon. Super simple.",
  },
  {
    initials: "DT",
    name: "Daniel T.",
    note: "Automatic lessons",
    quote:
      "Clear pricing before I booked and no phone calls. My instructor was friendly and easy to learn with.",
  },
  {
    initials: "RP",
    name: "Riley P.",
    note: "Sydney learner",
    quote:
      "Changing a lesson time took a minute in my account. That flexibility made it so much easier around work.",
  },
  {
    initials: "EC",
    name: "Emily C.",
    note: "Passed first time",
    quote:
      "We focused on the local test routes and parking. I felt ready on the day and passed on my first attempt.",
  },
  {
    initials: "MW",
    name: "Marcus W.",
    note: "Perth learner",
    quote:
      "Found a trusted instructor nearby with great reviews. Lessons started on time and I improved quickly.",
  },
  {
    initials: "AL",
    name: "Aisha L.",
    note: "Manual lessons",
    quote:
      "I wanted a manual instructor and could filter that straight away. Booking was quick and the car was clean.",
  },
];

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[number];
}) {
  return (
    <blockquote>
      <span className="quote-mark" aria-hidden="true">
        “
      </span>
      <div className="stars">★★★★★</div>
      <p>{review.quote}</p>
      <footer>
        <span>{review.initials}</span>
        <div>
          <strong>{review.name}</strong>
          <small>{review.note}</small>
        </div>
      </footer>
    </blockquote>
  );
}

export function Reviews() {
  return (
    <section className="reviews section" id="reviews">
      <div className="section-head">
        <div>
          <span className="eyebrow">Learner stories</span>
          <h2>Learners across Australia love Drivecab.</h2>
        </div>
        <div className="review-score">
          <strong>4.9</strong>
          <span>
            <b>★★★★★</b>
            <small>2,400+ reviews</small>
          </span>
        </div>
      </div>
      <div className="review-marquee">
        <div className="review-track">
          <div className="review-group">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
          <div className="review-group" aria-hidden="true">
            {reviews.map((review) => (
              <ReviewCard key={`${review.name}-copy`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
