import Image from "next/image";
import image1 from "../public/bg3.webp";
import styles from './page.module.css';
import { isAbsolute } from "path";

export default function Bloggg() {
    return (
        <div className="contains">
      {/* Header Section */}
      <div className="upper">
        <h1 className="text">Front-End Frameworks</h1>
      </div>

      {/* Content and Image Layout */}
      <div className="content-wrapper">
        {/* Content Section */}
        <div className="content">
          <p>
          1. React: The Go-To Choice for Dynamic UIs
React continues to dominate the web development scene in 2024, thanks to its flexibility and robust ecosystem. Developed and maintained by Facebook, React allows developers to create reusable components, making it easier to build dynamic and interactive UIs. Its Virtual DOM ensures fast updates and rendering, improving app performance significantly.

Key Features of React:

Component-based architecture
Strong community support
Seamless integration with other libraries
Excellent for building Single Page Applications (SPAs)
2. Vue.js: A Progressive Framework for New and Experienced Developers
Vue.js remains one of the most developer-friendly frameworks in 2024. Known for its simplicity and ease of integration, Vue.js is perfect for both small and large-scale projects. It offers two-way data binding and a virtual DOM, similar to React, but with a less steep learning curve. This makes Vue a great choice for beginners and experienced developers alike.

Why Vue.js Stands Out:

Progressive framework (easy to integrate into existing projects)
Simple learning curve
Powerful tooling with Vue CLI and Vue DevTools
Great for small to medium-scale projects
3. Angular: The Complete Framework for Enterprise Applications
Angular remains the top choice for enterprise-level applications in 2024. Developed and maintained by Google, Angular is a full-fledged framework that comes with out-of-the-box solutions for routing and state management.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-wrapper">
          <Image src={image1} alt="Blog Image" width={400} height={300} />
        </div>
      </div>
    </div>
    )
}