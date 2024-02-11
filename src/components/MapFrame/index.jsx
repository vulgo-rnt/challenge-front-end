export default function MapFrame({ location, size }) {
  return (
    <iframe
      src={`https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=${location.join()}+(s)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`}
      width="400"
      height="300"
      style={{ border: 0, borderRadius: "4px" }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
