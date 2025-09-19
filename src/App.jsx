import React, { useState } from 'react';
import './index.css'; // Ensure this imports shared styles
import { useNavigate } from 'react-router-dom';

const accountTypes = [
  'Individual',
  'Organization',
  'Government',
  'Other'
];

function App() {
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType) {
      navigate('/login');
    }
  };

  return (
    <div className="form-container text-gray-700">
      <h1 className="form-title">CarbonSetu Registry - Participant Account Holder Agreement</h1>
      <ol type="1" className="text-gray-700 text-base mb-6 list-decimal list-inside space-y-2">
        <li>
          Select your account type from the menu below and click the <b>"Continue Registration"</b> button.
        </li>
        <li>
          Read and agree to the CarbonSetu Registry Terms of Use. These will be available after clicking the <b>"Continue Registration"</b> button below.
        </li>
        <li>
          Upon accepting the CarbonSetu Registry Terms of Use, the next screen will show the new account application form. Complete all required fields in this form and click the <b>"Submit"</b> button.
        </li>
        <li>
          Upon completing the new account application form, the Account Manager identified in the form will receive an account activation email. This email will explain how to activate your CarbonSetu Registry account. This activation must occur before a CarbonSetu Registry Administrator is notified of your pending account.
        </li>
        <li>
          A CarbonSetu Registry Administrator will review your account application. Where the account application is complete and approved, an email notification describing account approval will be sent to the designated Account Manager. Where materials are incomplete or additional information is required, a CarbonSetu Registry Administrator will contact the Account Manager.
        </li>
        <li>
          Approved accounts may begin using all functions in the CarbonSetu Registry available to the account type selected in step 1 above.
        </li>
        <li>
          Accounts will be billed for the Account Subscription Fee when the account is approved. Once the invoice is created, the CarbonSetu Registry sends the Account Manager an email notification with the invoice and payment details. The invoice is also made available via the <b>"My Invoices"</b> report within the CarbonSetu Registry for downloading and printing. Failure to pay the Account Subscription Fee will result in account inactivation.
        </li>
        <li>
          If you have any questions about the CarbonSetu Registry account application process, please contact a CarbonSetu Registry Administrator at:<br />
          <b>Email:</b> <a href="mailto:Registry@verra.org">carbonSetu@mail.com</a>
        </li>
        <li>
          Select your account type from the menu below and click the <b>"Continue Registration"</b> button.
        </li>
      </ol>
      <hr />
      <form className="signup-form">
        <label htmlFor="accountType" className="form-label">Select Account Type:</label>
        <select
          id="accountType"
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          className="form-input"
        >
          <option value="">-- Select --</option>
          {accountTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <button
  type="button"
  disabled={!selectedType}
  className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl text-lg ${!selectedType ? 'opacity-50 cursor-not-allowed' : ''}`}
  onClick={handleContinue}
>
  Continue Registration
</button>
</form>
    </div>
  );
}

export default App;