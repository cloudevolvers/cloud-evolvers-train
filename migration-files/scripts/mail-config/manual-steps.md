# Mail Flow Restrictions for xEvolve

## App Registration Information

- **App Registration ID**: e66fa949-5dad-4067-b01b-587088d16796
- **Email Sender**: noreply@xevolve.com
- **Allowed Domains**: xevolve.io, spotcloud.nl

## Instructions for Exchange Administrator

If you don't have permissions to run the PowerShell scripts, please follow these manual steps in the Exchange Admin Center:

### 1. Create Mail Flow Rule

1. Sign in to [Exchange Admin Center](https://admin.exchange.microsoft.com)
2. Navigate to **Mail flow > Rules**
3. Click **Add a rule** and select **Create a new rule**
4. Name the rule: "Restrict App Registration e66fa949-5dad-4067-b01b-587088d16796 to specific domains"
5. Set the following conditions:
   - **Apply this rule if**: The sender is located "Inside the organization"
   - **AND**: A message header includes "X-MS-Exchange-Organization-AuthAs" with text patterns matching "Application"
   - **AND**: A message header includes "X-MS-Exchange-Organization-AuthSource" with text patterns matching your App ID
   - **EXCEPT IF**: The recipient domain is "xevolve.io" OR "spotcloud.nl"
6. Set the following actions:
   - **Do the following**: Block the message > Reject the message with the explanation "This application can only send emails to xevolve.io and spotcloud.nl domains"
7. Save the rule

### 2. Create Application Access Policy

Run the following commands in Exchange Online PowerShell:

```powershell
Connect-ExchangeOnline

New-ApplicationAccessPolicy -AppId "e66fa949-5dad-4067-b01b-587088d16796" -PolicyScopeGroupId "noreply@xevolve.com" -AccessRight RestrictAccess -Description "Restrict mail send to specific mailbox"

Test-ApplicationAccessPolicy -Identity "noreply@xevolve.com" -AppId "e66fa949-5dad-4067-b01b-587088d16796"
```

## Testing

To test if the restrictions are working:
1. Send an email to an allowed domain (e.g., user@xevolve.io) - This should work
2. Send an email to a non-allowed domain - This should be rejected

If you need further assistance, please contact the xEvolve development team.
