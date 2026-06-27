export function NAPBlock() {
  return (
    <div 
      className="nap-block bg-gold/10 p-6 rounded-lg border border-gold/20"
      itemScope
      itemType="https://schema.org/CateringBusiness"
    >
      <h3 className="font-playfair text-xl font-bold text-maroon mb-4">Contact Information</h3>
      <div className="space-y-2 text-sm md:text-base">
        <p>
          <span itemProp="name" className="font-semibold text-maroon">SS Catering & Events</span>
        </p>
        <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">7, Selvanayaki Garden, Siruvani Main Road</span>,
          {' '}<span itemProp="addressLocality">Coimbatore</span>,
          {' '}<span itemProp="addressRegion">Tamil Nadu</span>
          {' '}<span itemProp="postalCode">641101</span>
        </p>
        <p>
          Phone:{' '}
          <a 
            itemProp="telephone" 
            href="tel:+918667566318"
            className="text-gold hover:text-maroon font-semibold"
          >
            086675 66318
          </a>
        </p>
        <p>
          Email:{' '}
          <a 
            itemProp="email" 
            href="mailto:info@sscateringcoimbatore.com"
            className="text-gold hover:text-maroon font-semibold"
          >
            info@sscateringcoimbatore.com
          </a>
        </p>
        <p>
          Website:{' '}
          <span itemProp="url">https://www.sscateringcoimbatore.com/</span>
        </p>
        <p className="text-charcoal">
          <span itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
            <span itemProp="dayOfWeek">Monday - Sunday</span>
            {' '}<span itemProp="opens">00:00</span> - <span itemProp="closes">23:59</span>
          </span>
        </p>
      </div>
    </div>
  )
}
