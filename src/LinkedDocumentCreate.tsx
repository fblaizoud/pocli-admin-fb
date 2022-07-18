import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  regex,
  Validator,
  required,
  minLength,
  maxLength,
  ReferenceInput,
  SelectInput,
  DateInput,
  NumberInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateCity: Validator[] = [required(), minLength(2), maxLength(200)];
const validateAddress: Validator[] = [required(), minLength(2), maxLength(255)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, "Must be a valid Zip Code"),
];
export interface IFamilyMember {
  firstname: string;
}

export interface IFamily {
  name: string;
}

export interface ICommunication {
  object: string;
  date: string;
}

export interface IEvent {
  description: string;
  date: string;
}

export interface IDocument {
  name: string;
  url: string;
}

const familyMemberRenderer = (familyMember: IFamilyMember) =>
  `${familyMember.firstname}`;
const familyRenderer = (family: IFamily) => `${family.name}`;
const communicationRenderer = (communication: ICommunication) =>
  `${communication.object} ${communication.date}`;
const eventRenderer = (event: IEvent) => `${event.description} ${event.date}`;
const documentRenderer = (document: IDocument) =>
  `${document.name} ${document.url}`;

export const LinkedDocumentCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une communication pour un membre" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput source="idFamily" reference="families" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idFamilyMember"
        reference="familyMembers"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyMemberRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idCommunication"
        reference="communications"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={communicationRenderer} />
      </ReferenceInput>
      <ReferenceInput source="idEvent" reference="events" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={eventRenderer} />
      </ReferenceInput>
      <ReferenceInput source="idDocument" reference="documents" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={documentRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);