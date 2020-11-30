import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { Container, BlockContent, Typography } from '..';

import { StyledLink, StyledImageContainer, StyledGrid, StyledMainContent, StyledListGroup, StyledListGroupHeadline, StyledList, StyledListItem } from './style';

const TeamMember = ({ person, _rawPerson, certifications }) => {
  const { image, contact } = person;

  return (
    <article>
      {image && image.asset && (
        <StyledImageContainer>
          <img
            src={imageUrlFor(buildImageObj(image))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={image.alt || `Avatar for ${person.name}`}
          />
        </StyledImageContainer>
      )}
      <Container>
        <StyledLink to='/'>
          <FontAwesomeIcon icon='arrow-left' />
          <span>Back</span>
        </StyledLink>

        <StyledGrid>
          <StyledMainContent>
            <h1 css={Typography.responsiveTitle1}>{person.name}</h1>
            {_rawPerson.bio && <BlockContent blocks={_rawPerson.bio} />}
          </StyledMainContent>

          <aside>
            {certifications.length > 0 && (
              <StyledListGroup>
                <StyledListGroupHeadline css={Typography.base}>
                  Certifications
                </StyledListGroupHeadline>
                <ul>
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </StyledListGroup>
            )}
            {contact && contact.socialMedia.length > 0 && (
              <StyledListGroup>
                <StyledListGroupHeadline css={Typography.base}>
                  Social Media
                </StyledListGroupHeadline>
                <StyledList>
                  {contact.socialMedia.map((platform) => (
                    <StyledListItem key={platform.linkText}>
                      {platform.icon && (
                        <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} />
                      )}
                      <a href={platform.url} target='_blank' rel='noreferrer noopener'>
                        {platform.linkText}
                      </a>
                    </StyledListItem>
                  ))}
                </StyledList>
              </StyledListGroup>
            )}
          </aside>
        </StyledGrid>
      </Container>
    </article>
  );
};

export default TeamMember;