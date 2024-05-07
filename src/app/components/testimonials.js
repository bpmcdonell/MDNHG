import Pocketbase from "pocketbase";

export default async function Testimonials() {
    const pb = new Pocketbase("http://127.0.0.1:8090");

    const testimonials = await pb
        .collection("testimonials")
        .getFullList({
            sort: "-created",
        })
        .catch((err) => {
            console.log(err);
        });

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
