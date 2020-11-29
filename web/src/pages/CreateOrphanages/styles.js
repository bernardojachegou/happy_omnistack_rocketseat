import styled from 'styled-components';

export const PageCreateOrphanage = styled.div`
  display: flex;

  main {
    flex: 1;
  }

  form.create-orphanage-form {
    width: 700px;
    margin: 64px auto;
    background: #ffffff;
    border: 1px solid #9f9d68;
    border-radius: 20px;
    padding: 64px 80px;
    overflow: hidden;
  }

  form.create-orphanage-form .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid #9f9d68;
    border-radius: 20px;
  }

  form.create-orphanage-form fieldset {
    border: 0;
  }

  form.create-orphanage-form fieldset + fieldset {
    margin-top: 40px;
  }

  form.create-orphanage-form fieldset legend {
    width: 100%;
    font-size: 32px;
    line-height: 34px;
    color: #87689f;
    font-weight: 700;
    border-bottom: 1px solid #9f9d68;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }

  form.create-orphanage-form .input-block + .input-block {
    margin-top: 24px;
  }

  form.create-orphanage-form .input-block label {
    display: flex;
    color: #87689f;
    margin-bottom: 8px;
    line-height: 24px;
  }

  form.create-orphanage-form .input-block label span {
    font-size: 14px;
    color: #87689f;
    margin-left: 24px;
    line-height: 24px;
  }

  form.create-orphanage-form .input-block input,
  form.create-orphanage-form .input-block textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #9f9d68;
    border-radius: 20px;
    outline: none;
    color: #87689f;
  }

  form.create-orphanage-form .input-block input {
    height: 64px;
    padding: 0 16px;
  }

  form.create-orphanage-form .input-block textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  form.create-orphanage-form .input-block .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }

  form.create-orphanage-form .input-block .images-container img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  form.create-orphanage-form .input-block .new-image {
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed #c194e3;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form.create-orphanage-form .input-block input[type='file'] {
    visibility: hidden;
  }

  form.create-orphanage-form .input-block .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  form.create-orphanage-form .input-block .button-select button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #9f9d68;
    color: #9f9d68;
    cursor: pointer;
    outline: none;
  }

  form.create-orphanage-form .input-block .button-select button.active {
    background: #edfff6;
    border: 2px solid #c194e3;
    color: #c194e3;
    outline: none;
  }

  form.create-orphanage-form .input-block .button-select button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  form.create-orphanage-form .input-block .button-select button:last-child {
    border-radius: 0 20px 20px 0;
  }
`;
