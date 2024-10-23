import Image from "next/image";
import image1 from "../public/bg1.png";
import styles from './page.module.css';
import { isAbsolute } from "path";

export default function Blog() {
    return (
        <div className="contains">
      {/* Header Section */}
      <div className="upper">
        <h1 className="text">Issues of AWS</h1>
      </div>

      {/* Content and Image Layout */}
      <div className="content-wrapper">
        {/* Content Section */}
        <div className="content">
          <p>
          Amazon EKS now offers dual stack support for both the EKS management API endpoint and the Kubernetes API server endpoint in IPv6 EKS clusters. Dual stack support is also available for private access to the EKS management API endpoint from your Amazon VPC via AWS PrivateLink. These dual stack endpoints are provided under a new AWS DNS domain name, while the existing EKS management API endpoints remain available for backward compatibility.
AWS announced integration of Amazon Q CLI into CloudShell, enabling the use of natural language to generate AWS commands and offering personalized command suggestions, minimizing the need to search through documentation.
Amazon QuickSight now supports programmatic export and import of shared folders and triggering scheduled reports via API The export/import APIs are StartAssetBundleExportJob and StartAssetBundleImportJob. This update allows you to back up, restore, replicate, and migrate QuickSight folders along with their member assets and subfolders. Previously, folder deployment had to be managed separately. Additionally, the StartDashboardSnapshotJobSchedule API runs the report according to the configured schedule settings, including export formats (PDF, CSV, Excel, etc.) and email details (subject line, body text, and attachments).
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