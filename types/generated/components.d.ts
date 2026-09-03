import type { Schema, Struct } from '@strapi/strapi';

export interface CardsExperienceCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_experience_cards';
  info: {
    displayName: 'esperienza';
  };
  attributes: {
    descrizione: Schema.Attribute.Text & Schema.Attribute.Required;
    immagine: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    nome: Schema.Attribute.String & Schema.Attribute.Required;
    titolo: Schema.Attribute.String;
  };
}

export interface CardsTalesOf extends Struct.ComponentSchema {
  collectionName: 'components_cards_tales_ofs';
  info: {
    displayName: 'tales_of';
  };
  attributes: {
    immagine: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CardsTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_cards_team_members';
  info: {
    displayName: 'membro_team';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    nome: Schema.Attribute.String & Schema.Attribute.Required;
    profilo_linkedin: Schema.Attribute.String & Schema.Attribute.Required;
    ruolo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsVisitCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_visit_cards';
  info: {
    displayName: 'visit_cremona';
  };
  attributes: {
    dettaglio_1: Schema.Attribute.String & Schema.Attribute.Required;
    dettaglio_2: Schema.Attribute.String;
    dettaglio_3: Schema.Attribute.String;
    dettaglio_4: Schema.Attribute.String;
    dettaglio_5: Schema.Attribute.String;
    intro: Schema.Attribute.RichText & Schema.Attribute.Required;
    nome: Schema.Attribute.String & Schema.Attribute.Required;
    prezzo: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface DownloadsDownloads extends Struct.ComponentSchema {
  collectionName: 'components_downloads_downloads';
  info: {
    displayName: 'download';
  };
  attributes: {
    cta: Schema.Attribute.String;
    download: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LoghiPartner extends Struct.ComponentSchema {
  collectionName: 'components_loghi_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    immagine: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface TalesComposer extends Struct.ComponentSchema {
  collectionName: 'components_tales_composers';
  info: {
    displayName: 'composer';
  };
  attributes: {
    bio: Schema.Attribute.RichText & Schema.Attribute.Required;
    immagine: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    nome: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TalesPageElements extends Struct.ComponentSchema {
  collectionName: 'components_tales_page_elements';
  info: {
    displayName: 'page_elements';
  };
  attributes: {
    descrizione: Schema.Attribute.RichText & Schema.Attribute.Required;
    immagine: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    intro: Schema.Attribute.Text & Schema.Attribute.Required;
    titolo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.experience-card': CardsExperienceCard;
      'cards.tales-of': CardsTalesOf;
      'cards.team-member': CardsTeamMember;
      'cards.visit-card': CardsVisitCard;
      'downloads.downloads': DownloadsDownloads;
      'loghi.partner': LoghiPartner;
      'tales.composer': TalesComposer;
      'tales.page-elements': TalesPageElements;
    }
  }
}
