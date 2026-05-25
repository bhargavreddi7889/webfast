export interface Testimonial {
  name: string;
  rating: number;
  review: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Gautam Sharma",
    rating: 5,
    review:
      "Web Fast Technology's highly efficient team made our project a breeze. They understood our requirements perfectly and delivered a website that exceeded our expectations. The team was proactive in providing solutions and addressing any issues that arose. Their expertise in web development is evident in the quality of their work. We particularly appreciated their commitment to meeting deadlines and their transparent communication throughout the project. The end result is a website that not only looks great but also performs seamlessly. We highly recommend Web Fast Technology for their professionalism and expertise.",
  },
  {
    name: "Chandani Kumari",
    rating: 5,
    review:
      "The innovative and creative solutions provided by Web Fast Technology have transformed our digital presence. Their team brought fresh ideas to the table and executed them flawlessly. We were particularly impressed with their ability to understand our brand and translate it into a dynamic, user-friendly website. Their design team is top-notch, creating visuals that are both modern and engaging. The project was completed on time and within budget, without any compromises on quality. Web Fast Technology is a fantastic choice for anyone looking to elevate their web presence.",
  },
  {
    name: "Bhoomik",
    rating: 5,
    review:
      "Working with Web Fast Technology has changed our business. Their team is extremely knowledgeable and dedicated, regularly producing excellent results. It's a wonderful experience working with this agency.",
  },
  {
    name: "Ashish Mohanty",
    rating: 5,
    review:
      "They exceeded my expectations. Their team displayed exceptional expertise in SEO strategies, which significantly boosted our online visibility and organic traffic. Highly recommend for reliable digital marketing solutions.",
  },
  {
    name: "Sonia Arora",
    rating: 5,
    review:
      "Without a doubt, Web Fast Technology is the best digital marketing company I've ever dealt with. Their methods have greatly increased our online visibility, and we are grateful for their unwavering commitment to our success.",
  },
  {
    name: "Raj Tomar",
    rating: 5,
    review:
      "It was a great experience here — everyone is so hardworking and passionate towards their work. Best digital marketing agency in Delhi NCR.",
  },
  {
    name: "Parmeet Kaur",
    rating: 5,
    review:
      "Web Fast Technology sets a high bar in the digital marketing landscape. With a focus on search engine optimization strategies, they are a trusted partner worth considering.",
  },
  {
    name: "Yashika Gupta",
    rating: 5,
    review:
      "Excellent service! This team really knows how to boost online presence. Creative, responsive, and they truly understand our brand's needs. Highly recommend for businesses looking to elevate their digital game!",
  },
  {
    name: "Prince Gorayan",
    rating: 5,
    review:
      "Web Fast Technology did a great job for my business — they created a wonderful website that helps grow my business. They have proven their experience and excellence.",
  },
  {
    name: "Anurag Makol",
    rating: 5,
    review:
      "Top-notch social media and graphic designing services. Their expertise in crafting engaging content and stunning visuals sets them apart. Professionalism and timely delivery make them a go-to choice.",
  },
];

/** First N testimonials shown on the homepage preview */
export const FEATURED_TESTIMONIAL_COUNT = 2;
