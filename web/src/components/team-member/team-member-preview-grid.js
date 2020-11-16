import React from 'react';
import { Link } from 'gatsby';
import TeamMemberPreview from './team-member-preview';

import { responsiveTitle2 } from '../typography.module.css';
import styles from './team-member-preview-grid.module.css';

const TeamMemberPreviewGrid = ({ title, nodes, browseMoreHref, browseMoreText }) => (
  <div className={styles.root}>
    {title && (
      <h2 className={responsiveTitle2}>{title}</h2>
    )}
    <ul className={styles.grid}>
      {nodes.map(node => (
        <li key={node.id}>
          <TeamMemberPreview {...node} />
        </li>
      ))}
    </ul>
    {browseMoreHref && (
      <div className={styles.browseMoreNav}>
        <Link to={browseMoreHref}>{browseMoreText}</Link>
      </div>
    )}
  </div>
);

export default TeamMemberPreviewGrid;
