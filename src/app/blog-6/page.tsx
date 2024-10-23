import Image from "next/image";
import image1 from "../public/bg6.png";
import styles from './page.module.css';
import { isAbsolute } from "path";

export default function Blogggggg() {
    return (
        <div className="contains">
      {/* Header Section */}
      <div className="upper">
        <h1 className="text">Node.js Framework</h1>
      </div>

      {/* Content and Image Layout */}
      <div className="content-wrapper">
        {/* Content Section */}
        <div className="content">
          <p>
          Why Upgrade to Express v5?
The release of Express v5 brings several key features, bug fixes, and performance enhancements that modernize the framework. While previous versions were reliable and functional, v5 addresses the need for features present in more modern web frameworks by focusing on:

Support for modern JavaScript (ES6+) features
Better handling of async/await and promises
Improved routing and middleware management
Enhanced performance and security
More powerful error handling
Key Features and Improvements in Express v5
1. Full Support for Promises and Async/Await
One of the most significant updates in Express v5 is its native support for promises and async/await. Previously, Express relied on callback-based middleware, which often led to callback hell in complex applications.

In Express v5, you can now write cleaner and more readable asynchronous code using async/await.
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