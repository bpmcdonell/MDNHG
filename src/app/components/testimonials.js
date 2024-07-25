export default async function Testimonials() {
    // i dont feel like doing this right now. i will come back to it later.

    return (
        console.log(testimonials),
        (
            <div>
                <p>Testimonials</p>
                <ul>
                    {testimonials.map((testimonial) => (
                        <li key={testimonial.id}>
                            <p>{testimonial.name}</p>
                            <p>{testimonial.testimonial}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
}
