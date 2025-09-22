// Create this file as: src/containers/cloudProviders/CloudProviders.js

import React, { useContext } from "react";
import "./CloudProviders.scss";
import { cloudProvidersSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CloudProviders() {
  const { isDark } = useContext(StyleContext);
  
  if (!cloudProvidersSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="cloud-providers">
        <div className="cloud-providers-container">
          <div className="cloud-providers-header">
            <h1 className="cloud-providers-title">{cloudProvidersSection.title}</h1>
            <p className={isDark ? "dark-mode cloud-providers-subtitle" : "cloud-providers-subtitle"}>
              {cloudProvidersSection.subtitle}
            </p>
          </div>

          {/* Cloud Providers Section */}
          <div className="cloud-providers-section">
            <h2 className="section-title">Cloud Infrastructure</h2>
            <div className="cloud-providers-grid">
              {cloudProvidersSection.cloudProviders.map((provider, i) => (
                <Fade left duration={1000} key={i}>
                  <div className={isDark ? "dark-mode cloud-provider-card" : "cloud-provider-card"}>
                    <div className="provider-header">
                      <img
                        crossOrigin={"anonymous"}
                        className="provider-logo"
                        src={provider.image}
                        alt={provider.name}
                      />
                      <div className="provider-info">
                        <h3 className="provider-name">{provider.name}</h3>
                        <p className="provider-experience">{provider.experience}</p>
                      </div>
                    </div>
                    
                    <div className="provider-services">
                      <h4>Services & Tools:</h4>
                      <div className="services-tags">
                        {provider.services.map((service, index) => (
                          <span key={index} className="service-tag">{service}</span>
                        ))}
                      </div>
                    </div>
                    
                    {provider.certifications.length > 0 && (
                      <div className="provider-certifications">
                        <h4>Certifications:</h4>
                        <ul>
                          {provider.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Fade>
              ))}
            </div>
          </div>

          {/* Automation Tools Section */}
          <div className="automation-tools-section">
            <h2 className="section-title">Automation & No-Code Tools</h2>
            <div className="automation-tools-grid">
              {cloudProvidersSection.automationTools.map((tool, i) => (
                <Fade right duration={1000} key={i}>
                  <div className={isDark ? "dark-mode automation-tool-card" : "automation-tool-card"}>
                    <div className="tool-header">
                      <img
                        crossOrigin={"anonymous"}
                        className="tool-logo"
                        src={tool.image}
                        alt={tool.name}
                      />
                      <div className="tool-info">
                        <h3 className="tool-name">{tool.name}</h3>
                        <span className={`expertise-badge ${tool.expertise.toLowerCase()}`}>
                          {tool.expertise}
                        </span>
                      </div>
                    </div>
                    
                    <p className="tool-description">{tool.description}</p>
                    
                    <div className="tool-use-cases">
                      <h4>Use Cases:</h4>
                      <div className="use-cases-tags">
                        {tool.useCases.map((useCase, index) => (
                          <span key={index} className="use-case-tag">{useCase}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}