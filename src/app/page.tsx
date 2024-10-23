import Image from "next/image";
import codeImage from "./public/bg1.png"
import secondImage from "./public/bg2.jpg"
import thirdImage from "./public/bg3.webp"
import fourthImage from "./public/bg4.jpg"
import fifthImage from "./public/bg5.jpg"
import sixthImage from "./public/bg6.png"
import Header from "./components/header";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Header/>
  
      <div className="blog-container">
        {/* Blog Card 1 */}
        <div className="blog-card">
          <div className="image-container">
            <Image src={codeImage} alt="My Image" width={500} height={300} />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">Issues of AWS</h3>
            <p className="blog-text">
            What happened in AWS CloudSecurity last week October 15- October 22, 2024?
            </p>
            <Link href={"/blog-1"}>
            <button className="read-more">Read More</button>
            </Link>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="blog-card">
          <div className="image-container">
          <Image src={secondImage} alt="My Image" width={500} height={300} />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">Coding Tips</h3>
            <p className="blog-text">
            How to Prepare for Coding Interviews: Tips and Resources?
            </p>
            <Link href={"/blog-2"}>
            <button className="read-more">Read More</button>
            </Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="image-container">
          <Image src={thirdImage} alt="My Image" width={500} height={300} />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">Front-End Frameworks</h3>
            <p className="blog-text">
            Best Front-End Frameworks for Web Development in 2024
            </p>
            <Link href={"/blog-3"}>
            <button className="read-more">Read More</button>
            </Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="image-container">
          <Image src={fourthImage} alt="My Image" width={500} height={300} />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">Future of AI</h3>
            <p className="blog-text">
            The Future of AI: Will Artificial General Intelligence (AGI) Become a Reality?
            </p>
            <Link href={"/blog-4"}>
            <button className="read-more">Read More</button>
            </Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="image-container">
          <Image src={fifthImage} alt="My Image" width={500} height={300} />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">GenAI Applications</h3>
            <p className="blog-text">
            Getting Familiar with GenAI Applications and Use Cases
            </p>
            <Link href={"/blog-5"}>
            <button className="read-more">Read More</button>
            </Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="image-container">
          <Image src={sixthImage} alt="My Image" width={500} height={300} />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">Node.js Framework</h3>
            <p className="blog-text">
            A New Era for Node.js Framework: Introducing Express v5
            </p>
            <Link href={"/blog-6"}>
            <button className="read-more">Read More</button>
            </Link>
          </div>
        </div>
       </div>
    </div>
    
  );
}
