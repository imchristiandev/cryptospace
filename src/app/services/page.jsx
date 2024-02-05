"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/services.module.css";
import cloudIcon from "../../images/cloud-icon.svg";
import cloudIconsGroup from "../../images/cloud-group-icons.svg";
import uxUiIconGroup from "../../images/ux-ui-icons-group.svg";
import frontendIconGroup from "../../images/frontend-icons-group.svg";
import backendIconGroup from "../../images/backend-icons-group.svg";
import blockchainIconGroup from "../../images/blockchain-icons-group.svg";
import uxIcon from "../../images/ui-ux-icon.svg";
import frontendIcon from "../../images/frontend-icon.svg";
import backendIcon from "../../images/backend-icon.svg";
import blockchainIcon from "../../images/blockchain-icon.svg";
import CardService from "./CardService";
import CardDescriptionModal from "./CardDescriptionModal";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.mask}>
        <div className={styles.servicesHeader}>
          <h3 className={styles.serviceTitle}>Services</h3>
          <h2 className={styles.serviceSubtitle}>
            Empower Your Online Presence <br /> with Our Web Services
          </h2>
          <p className={styles.serviceDescription}>
            Explore a Dynamic Range of Web Solutions tailored to your needs. <br />
            From Cloud Infrastructure to cutting-edge UX/UI Design, our services <br />
            encompass Frontend and Backend Development, along with innovative <br />
            Blockchain Solutions. Elevate your online presence and enhance user <br />
            experiences with our comprehensive suite of services.
          </p>
        </div>

        <div className={styles.gridServices}>
          <CardService
            title="Cloud"
            description="Cloud infrastuctures provide cost-effective scalability, flexible remote access, enhanced data security, and simplified IT management, offering businesses efficiency and agility in the digital age."
            icon={cloudIcon}
            onClick={() =>
              openModal({
                title: "Cloud",
                description: [
                  "Management and Creation of Infrastructure for applications",
                  "Creation and Management of cloud infrastructure (GCP - AWS - Azure)",
                  "Infrastructure as Code development",
                  "Service management in Kubernetes",
                  "Handling Dockerfile images",
                  "Creating CI/CD processes in Kubernetes",
                  "Microservices centralized monitoring",
                  "Microservices backup",
                ],
                imageUrl: cloudIconsGroup,
              })
            }
          />

          <CardService
            title="UX / UI DESIGN"
            description="UX/UI services enhance user satisfaction, drive engagement, and improve conversion rates, leading to increased revenue and a competitive edge in the market."
            icon={uxIcon}
            onClick={() =>
              openModal({
                title: "UX / UI DESIGN",
                description: [
                  "User experience designs",
                  "UI Designs",
                  "CRO Conversion Optimization",
                  "Responsive Designs",
                ],
                imageUrl: uxUiIconGroup,
              })
            }
          />

          <CardService
            title="Frontend"
            description="Front-end development enhance user experiences, boost online engagement, and keep digital platforms competitive through user-friendly interfaces and up-to-date design."
            icon={frontendIcon}
            onClick={() =>
              openModal({
                title: "Frontend",
                description: [
                  "User Interface (UI) Development",
                  "HTML/CSS/JS Development",
                  "JavaScript programming",
                  "Responsive web design",
                  "Client side performance",
                  "API Integration",
                  "Continuous Maintenance",
                ],
                imageUrl: frontendIconGroup,
              })
            }
          />

          <CardService
            title="Backend"
            description="Back-end development provide reliable data management, security, and scalability for websites and applications, ensuring a seamless user experience and supporting business growth."
            icon={backendIcon}
            onClick={() =>
              openModal({
                title: "Backend",
                description: [
                  "Python Development",
                  "Rust Development",
                  "Go Development",
                  "Node JS Development",
                  "Machine Learning",
                  "Data Sciences",
                ],
                imageUrl: backendIconGroup,
              })
            }
          />

          <CardService
            title="Blockchain"
            description="Blockchain is the technological revolution that ensures security, transparency, and trust in every transaction. It eliminates intermediaries, reduces costs, and provides an immutable record of data."
            icon={blockchainIcon}
            onClick={() =>
              openModal({
                title: "Blockchain",
                description: [
                  "Solidity blockchain audit, smart contract, NFT, code length less than 1,000 lines.",
                  "Creation of BEP-20 and ERC-20 tokens, as well as smart contracts, on the Ethereum and Binance Smart Chain (BSC) blockchains.",
                  "Build a complete blockchain like ethereum or bsc with dpos",
                  "Cryptocurrency design, bitcoin token 3d, blockchain badge or logo",
                  "Custom smart contract with solidity",
                  "Consulting for crypto, blockchain",
                  "Cybersecurity service",
                ],
                imageUrl: blockchainIconGroup,
              })
            }
          />
        </div>
      </div>

      {isModalOpen && (
        <CardDescriptionModal
          title={selectedService.title}
          description={selectedService.description}
          imageUrl={selectedService.imageUrl}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
