import Image from "next/image";
import image1 from "../public/bg2.jpg";
import styles from './page.module.css';
import { isAbsolute } from "path";

export default function Blogg() {
    return (
        <div className="contains">
      {/* Header Section */}
      <div className="upper">
        <h1 className="text">Coding Tips</h1>
      </div>

      {/* Content and Image Layout */}
      <div className="content-wrapper">
        {/* Content Section */}
        <div className="content">
          <p>
          1. Understand the Interview Format
Coding interviews often follow a specific format, especially at tech giants like Google, Microsoft, or Facebook. You can expect:

Technical Questions: These could involve algorithm design, data structures, problem-solving, or even system design.
Behavioral Questions: Many companies assess how you work in teams or how you handle failure.
Understanding the format will help you prepare targeted practice. Practice mock interviews in environments similar to the one you expect.

2. Master the Fundamentals
Before diving into complex problems, ensure you have a strong grasp of fundamental topics such as:

Data Structures: Arrays, linked lists, trees, graphs, stacks, queues, and hash tables.
Algorithms: Sorting, searching, dynamic programming, greedy algorithms, backtracking, and recursion.
Mastering these basics is crucial because they form the backbone of most coding interview questions.

3. Practice Problem Solving
The more problems you solve, the more patterns you’ll recognize. Websites like LeetCode, HackerRank, and Codeforces provide a large collection of coding problems with solutions. Start with easy problems and gradually move to medium and hard levels as you build confidence.

Tip: When solving problems, don’t just look for the solution. Focus on:

Time Complexity: Can your solution be optimized?
Edge Cases: What happens with extreme inputs or edge cases
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