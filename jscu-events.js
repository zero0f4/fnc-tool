const JSCU_EVENTS = [
  {
    "category": "Account Activity",
    "subcategory": "Account Lockouts",
    "event_id": "4740",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A user account was locked out",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "User Added to Security-enabled Group",
    "event_id": "4728",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A member was added to a security-enabled Global group",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "User Added to Security-enabled Group",
    "event_id": "4732",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A member was added to a security-enabled Local group",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "User Added to Security-enabled Group",
    "event_id": "4756",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A member was added to a security-enabled Universal group",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Account Modified",
    "event_id": "4738",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A user account was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Computer Account Created",
    "event_id": "4741",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A computer account was created",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Computer Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Computer Account Modified",
    "event_id": "4742",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A computer account was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Computer Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Computer Account Deleted",
    "event_id": "4743",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A computer account was deleted",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Computer Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-Enabled Local group Changed",
    "event_id": "4735",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Local group was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-Enabled Global group Changed",
    "event_id": "4737",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Global group was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-Enabled Universal group Changed",
    "event_id": "4755",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Universal group was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Group's Type Changed",
    "event_id": "4764",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A group’s type was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-Enabled group Enumerated",
    "event_id": "4799",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled local group membership was enumerated",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Successful User Account Login",
    "event_id": "4624",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An account was successfully logged on",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Logon"
  },
  {
    "category": "Account Activity",
    "subcategory": "Failed User Account Login",
    "event_id": "4625",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An account failed to log on",
    "gpo": [
      "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Logon",
      "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Account Lockout"
    ]
  },
  {
    "category": "Account Activity",
    "subcategory": "Logoff Event",
    "event_id": "4634",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Logoff event (terminated)",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Logoff"
  },
  {
    "category": "Account Activity",
    "subcategory": "User initiated logoff",
    "event_id": "4647",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "User initiated logoff",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Logoff"
  },
  {
    "category": "Account Activity",
    "subcategory": "Logon with Special Privileges",
    "event_id": "4672",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Special Privileges assigned to Logon",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Special Logon"
  },
  {
    "category": "Account Activity",
    "subcategory": "Account Name Changed",
    "event_id": "4781",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "The name of an account was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Credentials backed up",
    "event_id": "5376",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Credential Manager credentials were backed up",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Credentials restored",
    "event_id": "5377",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Credential Manager credentials were restored from a backup",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "New User Account Created",
    "event_id": "4720",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "New user account created",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "New User Account Enabled",
    "event_id": "4722",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A user account was enabled",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Change Account Password",
    "event_id": "4723",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An attempt was made to change an account's password",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Reset Account Password",
    "event_id": "4724",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An attempt was made to reset an account's password",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "User Account Unlocked",
    "event_id": "4767",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A user account was unlocked",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Password Hash Accessed",
    "event_id": "4782",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "The password hash of an account was accessed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Other Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "User Account Deleted",
    "event_id": "4726",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "User Account Deleted",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-enabled Local Group Created",
    "event_id": "4731",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Local group was created",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-enabled Global Group Created",
    "event_id": "4727",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Global group was created",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-enabled Universal Group Created",
    "event_id": "4754",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Universal group was created",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "User Account Disabled",
    "event_id": "4725",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "User Account Disabled",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Group membership information",
    "event_id": "4627",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Group membership information.",
    "gpo": [
      "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Logon",
      "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Group Membership"
    ]
  },
  {
    "category": "Account Activity",
    "subcategory": "ACL Set on Administrators",
    "event_id": "4780",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "The ACL was set on accounts which are members of administrators groups",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Directory Services Adm. Password Set",
    "event_id": "4794",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An attempt was made to set the Directory Services Restore Mode administrator password",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "User Group Membership Enumerated",
    "event_id": "4798",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A user's local group membership was enumerated",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit User Account Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Account removed from Global Sec. Grp.",
    "event_id": "4729",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Account removed from Global Security Group",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-Enabled Global Group Deleted",
    "event_id": "4730",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Global group was deleted",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-Enabled Local Group Deleted",
    "event_id": "4734",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Local group was deleted",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Security-Enabled Universal Group Deleted",
    "event_id": "4758",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security-enabled Universal group was deleted",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Account removed from Local Sec. Grp.",
    "event_id": "4733",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Account removed from Local Security Group",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Account removed from Universal Sec. Grp.",
    "event_id": "4757",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Account removed from Universal Security Group",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Management\\Audit Security Group Management"
  },
  {
    "category": "Account Activity",
    "subcategory": "Account Login with Explicit Credentials",
    "event_id": "4648",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A logon was attempted using explicit credentials",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Logon"
  },
  {
    "category": "Account Activity",
    "subcategory": "Kerberos authentication ticket requested",
    "event_id": "4768",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A Kerberos authentication ticket (TGT) was requested",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Logon\\Audit Kerberos Authentication Service"
  },
  {
    "category": "Account Activity",
    "subcategory": "Kerberos service ticket requested",
    "event_id": "4769",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A Kerberos service ticket was requested",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Logon\\Audit Kerberos Service Ticket Operations"
  },
  {
    "category": "Account Activity",
    "subcategory": "Kerberos pre-authentication failed",
    "event_id": "4771",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Kerberos pre-authentication failed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Account Logon\\Audit Kerberos Authentication Service"
  },
  {
    "category": "Event Log Management",
    "subcategory": "Event Log was Cleared",
    "event_id": "104",
    "level": "Information",
    "channel": "System",
    "provider": "Microsoft-Windows-EventLog",
    "notes": "Event log other than security has been cleared",
    "gpo": ""
  },
  {
    "category": "Event Log Management",
    "subcategory": "Event Log was Cleared",
    "event_id": "1102",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-EventLog",
    "notes": "Security event log cleared",
    "gpo": ""
  },
  {
    "category": "Event Log Management",
    "subcategory": "Event Log Service Shutdown",
    "event_id": "1100",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-EventLog",
    "notes": "(Security Log) Event Log Service Shutdown",
    "gpo": ""
  },
  {
    "category": "External Devices",
    "subcategory": "New External Device",
    "event_id": "6416",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A new external device was recognized by the System",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Detailed Tracking\\Audit PNP Activity"
  },
  {
    "category": "Network Activity",
    "subcategory": "TS Session Reconnect",
    "event_id": "4778",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "TS Session Reconnect",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Other Logon/Logoff Events"
  },
  {
    "category": "Network Activity",
    "subcategory": "TS Session Disconnect",
    "event_id": "4779",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "TS Session Disconnect",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Other Logon/Logoff Events"
  },
  {
    "category": "Network Activity",
    "subcategory": "Outbound TS Connect Attempt",
    "event_id": "1024",
    "level": "Information",
    "channel": "Microsoft-Windows-TerminalServices-RDPClient/Operational",
    "provider": "Microsoft-Windows-TerminalServices-ClientActiveXCore",
    "notes": "Outbound TS connection attempt",
    "gpo": ""
  },
  {
    "category": "Network Activity",
    "subcategory": "Wireless 802.1X Auth",
    "event_id": "5632",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Wireless 802.1X Auth",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Other Logon/Logoff Events"
  },
  {
    "category": "Network Activity",
    "subcategory": "Replay Attack Detected",
    "event_id": "4649",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A replay attack was detected (KRB_AP_ERR_REPEAT)",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Logon/Logoff\\Audit Other Logon/Logoff Events"
  },
  {
    "category": "Network Activity",
    "subcategory": "BITS Job Resumed",
    "event_id": "1",
    "level": "Information",
    "channel": "Microsoft-Windows-Bits-Client/Operational",
    "provider": "Microsoft-Windows-Bits-Client",
    "notes": "BITS Job has been resumed",
    "gpo": ""
  },
  {
    "category": "Network Activity",
    "subcategory": "BITS New Job",
    "event_id": "3",
    "level": "Information",
    "channel": "Microsoft-Windows-Bits-Client/Operational",
    "provider": "Microsoft-Windows-Bits-Client",
    "notes": "New BITS Job",
    "gpo": ""
  },
  {
    "category": "Network Activity",
    "subcategory": "BITS Job Completion",
    "event_id": "4",
    "level": "Information",
    "channel": "Microsoft-Windows-Bits-Client/Operational",
    "provider": "Microsoft-Windows-Bits-Client",
    "notes": "BITS Job completion",
    "gpo": ""
  },
  {
    "category": "Network Activity",
    "subcategory": "BITS Transfer Started",
    "event_id": "59",
    "level": "Information",
    "channel": "Microsoft-Windows-Bits-Client/Operational",
    "provider": "Microsoft-Windows-Bits-Client",
    "notes": "BITS Job started to transfer file",
    "gpo": ""
  },
  {
    "category": "Network Activity",
    "subcategory": "Address Assigned (DHCPv4)",
    "event_id": "50028",
    "level": "Information",
    "channel": "Microsoft-Windows-Dhcp-Client/Operational",
    "provider": "Microsoft-Windows-Dhcp-Client",
    "notes": "IP address assigned to interface",
    "gpo": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WINEVT\\Channels\\Microsoft-Windows-Dhcp-Client/Operational\\Enabled = 1"
  },
  {
    "category": "Network Activity",
    "subcategory": "Address Assigned (DHCPv6)",
    "event_id": "51039",
    "level": "Information",
    "channel": "Microsoft-Windows-DHCPv6-Client/Operational",
    "provider": "Microsoft-Windows-DHCPv6-Client",
    "notes": "IP address assigned to interface",
    "gpo": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WINEVT\\Channels\\Microsoft-Windows-Dhcpv6-Client/Operational\\Enabled = 1"
  },
  {
    "category": "Network Activity",
    "subcategory": "DNS Query Completed",
    "event_id": "3008",
    "level": "Information",
    "channel": "Microsoft-Windows-DNS-Client/Operational",
    "provider": "Microsoft-Windows-DNS-Client",
    "notes": "DNS Client events query completed",
    "gpo": "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WINEVT\\Channels\\Microsoft-Windows-DNS-Client/Operational\\Enabled = 1"
  },
  {
    "category": "Policy Changes",
    "subcategory": "New Trust for Domain",
    "event_id": "4706",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A new trust was created to a domain.",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Authentication Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Domain Policy Changed",
    "event_id": "4739",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Domain policy changes",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Authentication Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Kerberos Policy Changed",
    "event_id": "4713",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Kerberos policy changes",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Authentication Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Audit Policy on Object Changed",
    "event_id": "4715",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "The audit policy (SACL) on an object was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Trusted Domain Information Modified",
    "event_id": "4716",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Trusted domain information was modified",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Authentication Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Trusted Forest Information Added",
    "event_id": "4865",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A trusted forest information entry was added",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Authentication Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Trusted Forest Information Removed",
    "event_id": "4866",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A trusted forest information entry was removed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Authentication Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Trusted Forest Information Modified",
    "event_id": "4867",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A trusted forest information entry was modified",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Authentication Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "System Security Access Granted",
    "event_id": "4717",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "System security access was granted to an account",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Authentication Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "System Audit Policy Changed",
    "event_id": "4719",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "System audit policy was changed.",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Auditing Settings on Global Object Changed",
    "event_id": "4817",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Auditing settings on object were changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Register Security Event Source",
    "event_id": "4904",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An attempt was made to register a security event source",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Unregister Security Event Source",
    "event_id": "4905",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An attempt was made to unregister a security event source",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "CrashOnAuditFail Value Changed",
    "event_id": "4906",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "The CrashOnAuditFail value has changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Auditing Settings on Object Changed",
    "event_id": "4907",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Auditing settings on object were changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Special Groups Logon Table Modified",
    "event_id": "4908",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Special Groups Logon table modified",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "Policy Changes",
    "subcategory": "Per User Audit Policy Changed",
    "event_id": "4912",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Per User Audit Policy was changed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Policy Change\\Audit Audit Policy Change"
  },
  {
    "category": "PowerShell",
    "subcategory": "Script Block Content",
    "event_id": "4104",
    "level": "Verbose, Warning",
    "channel": "Microsoft-Windows-PowerShell/Operational",
    "provider": "Microsoft-Windows-PowerShell",
    "notes": "Execute a Remote Command (Script Block Logging)",
    "gpo": ""
  },
  {
    "category": "Privilege Use",
    "subcategory": "Sensitive Privilege Use",
    "event_id": "4673",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A privileged service was called",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "AppLocker Block",
    "event_id": "8002",
    "level": "Information",
    "channel": "Microsoft-Windows-AppLocker/EXE and DLL",
    "provider": "Microsoft-Windows-AppLocker",
    "notes": "Configured to audit process starts.",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "AppLocker Block",
    "event_id": "8003",
    "level": "Warning",
    "channel": "Microsoft-Windows-AppLocker/EXE and DLL",
    "provider": "Microsoft-Windows-AppLocker",
    "notes": "Executable was allowed to run but would have been blocked in enforcing mode",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "AppLocker Block",
    "event_id": "8004",
    "level": "Error",
    "channel": "Microsoft-Windows-AppLocker/EXE and DLL",
    "provider": "Microsoft-Windows-AppLocker",
    "notes": "Executable was prevented from running",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "Script or Installer ran",
    "event_id": "8005",
    "level": "Information",
    "channel": "Microsoft-Windows-AppLocker/MSI and Script",
    "provider": "Microsoft-Windows-AppLocker",
    "notes": "Scripts and Installers run",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "AppLocker Warning",
    "event_id": "8006",
    "level": "Error",
    "channel": "Microsoft-Windows-AppLocker/MSI and Script",
    "provider": "Microsoft-Windows-AppLocker",
    "notes": "File  was allowed to run but would have been blocked in enforcing mode",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "AppLocker Warning",
    "event_id": "8007",
    "level": "Warning",
    "channel": "Microsoft-Windows-AppLocker/MSI and Script",
    "provider": "Microsoft-Windows-AppLocker",
    "notes": "File was prevented from running",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "Application Ran",
    "event_id": "8020",
    "level": "Information",
    "channel": "Microsoft-Windows-AppLocker/Packaged app-Execution",
    "provider": "Microsoft-Windows-AppLocker",
    "notes": "Modern app run",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "Application Installed",
    "event_id": "8023",
    "level": "Information",
    "channel": "Microsoft-Windows-AppLocker/Packaged app-Deployment",
    "provider": "Microsoft-Windows-AppLocker",
    "notes": "Modern app install",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "SRP Block",
    "event_id": "865, 866, 867, 868, 882",
    "level": "Warning",
    "channel": "Application",
    "provider": "Microsoft-Windows-SoftwareRestrictionPolicies",
    "notes": "Software Restriction Policies",
    "gpo": ""
  },
  {
    "category": "Process Monitoring",
    "subcategory": "Process Created",
    "event_id": "4688",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Process Created",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Detailed Tracking\\Audit Process Creation"
  },
  {
    "category": "Process Monitoring",
    "subcategory": "Process Terminated",
    "event_id": "4689",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Process Terminated",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Detailed Tracking\\Audit Process Termination"
  },
  {
    "category": "Object Access",
    "subcategory": "Registry Value Modified",
    "event_id": "4657",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A registry value was modified",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit Registry"
  },
  {
    "category": "Object Access",
    "subcategory": "Attempt to Access an Object",
    "event_id": "4663",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An attempt was made to access an object",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit Kernel Object"
  },
  {
    "category": "Object Access",
    "subcategory": "Network Share Access",
    "event_id": "5140",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A network share object was accessed",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit File Share"
  },
  {
    "category": "Object Access",
    "subcategory": "Network Share Created",
    "event_id": "5142",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A network share object was added",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit File Share"
  },
  {
    "category": "Scheduled Tasks",
    "subcategory": "Task Launched",
    "event_id": "200",
    "level": "Information",
    "channel": "Microsoft-Windows-TaskScheduler/Operational",
    "provider": "Microsoft-Windows-TaskScheduler",
    "notes": "Task Launched",
    "gpo": ""
  },
  {
    "category": "Scheduled Tasks",
    "subcategory": "Task Finished Successfully",
    "event_id": "201",
    "level": "Information",
    "channel": "Microsoft-Windows-TaskScheduler/Operational",
    "provider": "Microsoft-Windows-TaskScheduler",
    "notes": "Task Scheduler successfully completed task",
    "gpo": ""
  },
  {
    "category": "Scheduled Tasks",
    "subcategory": "Scheduled Tasks Created",
    "event_id": "4698",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A scheduled task was created",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit Other Object Access Events"
  },
  {
    "category": "Scheduled Tasks",
    "subcategory": "Scheduled Tasks Deleted",
    "event_id": "4699",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A scheduled task was deleted",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit Other Object Access Events"
  },
  {
    "category": "Scheduled Tasks",
    "subcategory": "Scheduled Tasks Enabled",
    "event_id": "4700",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A scheduled task was enabled",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit Other Object Access Events"
  },
  {
    "category": "Scheduled Tasks",
    "subcategory": "Scheduled Tasks Disabled",
    "event_id": "4701",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A scheduled task was disabled",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit Other Object Access Events"
  },
  {
    "category": "Scheduled Tasks",
    "subcategory": "Scheduled Tasks Updated",
    "event_id": "4702",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A scheduled task was updated",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\Object Access\\Audit Other Object Access Events"
  },
  {
    "category": "Services",
    "subcategory": "Windows Service Terminated Unexpectedly",
    "event_id": "7031",
    "level": "Error",
    "channel": "System",
    "provider": "Service Control Manager",
    "notes": "Service terminated unexpectedly, it has done this %n times",
    "gpo": ""
  },
  {
    "category": "Services",
    "subcategory": "Windows Service Terminated Unexpectedly",
    "event_id": "7034",
    "level": "Error",
    "channel": "System",
    "provider": "Service Control Manager",
    "notes": "Service terminated unexpectedly, corrective action %x taken",
    "gpo": ""
  },
  {
    "category": "Services",
    "subcategory": "Windows Service Start Type Changed",
    "event_id": "7040",
    "level": "Information",
    "channel": "System",
    "provider": "Service Control Manager",
    "notes": "Service start type changed",
    "gpo": ""
  },
  {
    "category": "Services",
    "subcategory": "New Service Installed",
    "event_id": "4697",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A service was installed in the system",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\System\\Audit Security System Extension"
  },
  {
    "category": "System Integrity",
    "subcategory": "Authentication Package Loaded",
    "event_id": "4610",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "An authentication package has been loaded by the Local Security Authority",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\System\\Audit Security System Extension"
  },
  {
    "category": "System Integrity",
    "subcategory": "Trusted Logon Process Registered",
    "event_id": "4611",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A trusted logon process has been registered with the Local Security Authority",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\System\\Audit Security System Extension"
  },
  {
    "category": "System Integrity",
    "subcategory": "Notification Package Loaded",
    "event_id": "4614",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A notification package has been loaded by the Security Account Manager",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\System\\Audit Security System Extension"
  },
  {
    "category": "System Integrity",
    "subcategory": "Security Package Loaded",
    "event_id": "4622",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "A security package has been loaded by the Local Security Authority",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\System\\Audit Security System Extension"
  },
  {
    "category": "System Integrity",
    "subcategory": "Invalid Image Hash",
    "event_id": "5038",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Code integrity determined that the image hash of a file is not valid.",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\System\\Audit System Integrity"
  },
  {
    "category": "System Integrity",
    "subcategory": "Invalid Image Page Hashes",
    "event_id": "6281",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Code integrity determined that the page hashes of an image file are not valid.",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\System\\Audit System Integrity"
  },
  {
    "category": "System Integrity",
    "subcategory": "Missing Security Req. to Load File",
    "event_id": "6410",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Code integrity determined that a file does not meet the security requirements to load into a process.",
    "gpo": "Computer Configuration\\Policies\\Windows Settings\\Security Settings\\Advanced Audit Policy Configuration\\System\\Audit System Integrity"
  },
  {
    "category": "System Integrity",
    "subcategory": "Untrusted Font",
    "event_id": "260",
    "level": "Information",
    "channel": "Microsoft-Windows-Win32k/Operational",
    "provider": "Microsoft-Windows-Win32k",
    "notes": "Attempt to load untrusted font",
    "gpo": "Computer Configuration\\Policies\\Administrative Templates\\System\\Mitigation Options\\Untrusted Font Blocking"
  },
  {
    "category": "WMI",
    "subcategory": "WMI Provider Loaded",
    "event_id": "5857",
    "level": "Information",
    "channel": "Microsoft-Windows-WMI-Activity/Operational",
    "provider": "Microsoft-Windows-WMI-Activity",
    "notes": "A WMI provider was loaded",
    "gpo": ""
  },
  {
    "category": "WMI",
    "subcategory": "WMI Query Error",
    "event_id": "5858",
    "level": "Information",
    "channel": "Microsoft-Windows-WMI-Activity/Operational",
    "provider": "Microsoft-Windows-WMI-Activity",
    "notes": "A WMI query error has occurred",
    "gpo": ""
  },
  {
    "category": "WMI",
    "subcategory": "Temporary WMI event subscription created",
    "event_id": "5860",
    "level": "Information",
    "channel": "Microsoft-Windows-WMI-Activity/Operational",
    "provider": "Microsoft-Windows-WMI-Activity",
    "notes": "A temporary WMI event subscription has been created",
    "gpo": ""
  },
  {
    "category": "WMI",
    "subcategory": "Permanent WMI event subscription created",
    "event_id": "5861",
    "level": "Information",
    "channel": "Microsoft-Windows-WMI-Activity/Operational",
    "provider": "Microsoft-Windows-WMI-Activity",
    "notes": "A permanent WMI event subscription has been created",
    "gpo": ""
  },
  {
    "category": "System Status",
    "subcategory": "App Crash",
    "event_id": "1000",
    "level": "Error",
    "channel": "Application",
    "provider": "Application Error",
    "notes": "Application Crashed",
    "gpo": ""
  },
  {
    "category": "System Status",
    "subcategory": "App Hang",
    "event_id": "1002",
    "level": "Error",
    "channel": "Application",
    "provider": "Application Hang",
    "notes": "Application hang",
    "gpo": ""
  },
  {
    "category": "System Status",
    "subcategory": "Windows Startup",
    "event_id": "12",
    "level": "Information",
    "channel": "System",
    "provider": "Microsoft-Windows-Kernel-General",
    "notes": "Windows Startup",
    "gpo": ""
  },
  {
    "category": "System Status",
    "subcategory": "Windows Shutdown",
    "event_id": "13",
    "level": "Information",
    "channel": "System",
    "provider": "Microsoft-Windows-Kernel-General",
    "notes": "Windows Shutdown",
    "gpo": ""
  },
  {
    "category": "System Status",
    "subcategory": "Unexpected Shutdown",
    "event_id": "41",
    "level": "Critical",
    "channel": "System",
    "provider": "Microsoft-Windows-Kernel-Power",
    "notes": "Unexpected Shutdown or Bluescreen",
    "gpo": ""
  },
  {
    "category": "System Status",
    "subcategory": "Shutdown Initiate",
    "event_id": "1074",
    "level": "Warning",
    "channel": "System",
    "provider": "User32",
    "notes": "Shutdown initiate request",
    "gpo": ""
  },
  {
    "category": "System Status",
    "subcategory": "System Time Changed",
    "event_id": "4616",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "System time change may be indicative of attempts to tamper with the system.",
    "gpo": ""
  },
  {
    "category": "System Status",
    "subcategory": "Boot Configuration Data Loaded",
    "event_id": "4826",
    "level": "Information",
    "channel": "Security",
    "provider": "Microsoft-Windows-Security-Auditing",
    "notes": "Boot Configuration Data Loaded",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Sysmon Service Status Changed ",
    "event_id": "0",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "Sysmon Service Status Changed",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Process creation",
    "event_id": "1",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "Process creation",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Process changed file creation time",
    "event_id": "2",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "A process changed a file creation time",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Network connection",
    "event_id": "3",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "Network connection",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Sysmon service state changed",
    "event_id": "4",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "Sysmon service state changed",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Process terminated",
    "event_id": "5",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "Process terminated",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Driver loaded",
    "event_id": "6",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "Driver loaded",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Image loaded",
    "event_id": "7",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "Image loaded",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Create Remote Thread",
    "event_id": "8",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "CreateRemoteThread",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Raw Access Read",
    "event_id": "9",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "RawAccessRead",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Process Access",
    "event_id": "10",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "ProcessAccess",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "File Create",
    "event_id": "11",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "FileCreate",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Registry Create/Delete",
    "event_id": "12",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "RegisteryEvent (Object create and Delete)",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Registry Value Set",
    "event_id": "13",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "RegisteryEvent value set",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Registry Key/Value Rename",
    "event_id": "14",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "RegisteryEvent key and value rename",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "File Create Stream Hash",
    "event_id": "15",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "FileCreateStreamHash",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Service Configuration Change",
    "event_id": "16",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "ServiceConfigurationChange",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Pipe Created",
    "event_id": "17",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "PipeEvent pipe created",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Pipe Connected",
    "event_id": "18",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "PipeEvent pipe connected",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "WMI Filter Activity",
    "event_id": "19",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "WMIEvent WMIEvenFilter activity detected",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "WMI Consumer Activity",
    "event_id": "20",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "WMIEvent Consumer activity detected",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "WMI Consumer to Filter Activity",
    "event_id": "21",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "WMIEvent Consumer to filter activity detected",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "DNS Query",
    "event_id": "22",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "DNSEvent DNS Query",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "File Delete",
    "event_id": "23",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "FileDelete a file delete was detected",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Clipboard Change",
    "event_id": "24",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "ClipboardChange new content in clipboard",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Process Tampering",
    "event_id": "25",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "ProcessTampering process image change",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "File Delete Detected",
    "event_id": "26",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "File Delete Detected",
    "gpo": ""
  },
  {
    "category": "Microsoft Sysmon",
    "subcategory": "Error",
    "event_id": "255",
    "level": "Information",
    "channel": "Microsoft-Windows-Sysmon/Operational",
    "provider": "Microsoft-Windows-Sysmon",
    "notes": "Sysmon error",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ACG Audit",
    "event_id": "1",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Arbitrary Code Guard Auditing",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ACG Block",
    "event_id": "2",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Arbitrary Code Guard Enforcement",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Audit Child Process Creation",
    "event_id": "3",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Child Process Creation Auditing",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Block Child Process Creation",
    "event_id": "4",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Child Process Creation Enforcement",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Audit Low Integrity Image Load",
    "event_id": "5",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Low Integrity Image Load Auditing",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Block Low Integrity Image Load",
    "event_id": "6",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Low Integrity Image Load Enforcement",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Audit Remote Image Loads",
    "event_id": "7",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Remote Image Loads Auditing",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Block Remote Image Loads",
    "event_id": "8",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Remote Image Loads Enforcement",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Audit Win32K System Call Table Use",
    "event_id": "9",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Audit the use of Win32K System Call Table",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Block Win32K System Call Table Use",
    "event_id": "10",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Prevent the use of Win32K System Call Table",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "CIG Audit",
    "event_id": "11",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "A non-Microsoft-signed binary would have been loaded",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "CIG Block",
    "event_id": "12",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/KernelMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "A Non-Microsoft-signed binary was prevented from loading",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "EAF Audit",
    "event_id": "13",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process would have been blocked from accessing the Export Address Table for module",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "EAF Enforce",
    "event_id": "14",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process was blocked from accessing the Export Address Table for module",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "EAF+ Audit",
    "event_id": "15",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process would have been blocked from accessing the Export Address Table for module",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "EAF+ Enforce",
    "event_id": "16",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process was blocked from accessing the Export Address Table for module",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "IAF Audit",
    "event_id": "17",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process would have been blocked from accessing the import Address Table for API",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "IAF Enforce",
    "event_id": "18",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process was blocked from accessing the Import Address Table for API",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ROP StackPivot Audit",
    "event_id": "19",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process would have been blocked from calling the API due to ROP exploit indications",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ROP StackPivot Enforce",
    "event_id": "20",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process was blocked from calling the API due to ROP exploit indications",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ROP CallerCheck Audit",
    "event_id": "21",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process would have been blocked from calling the API due to ROP exploit indications",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ROP CallerCheck Enforce",
    "event_id": "22",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process was blocked from calling the API due to ROP exploit indications",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ROP SimExec Audit",
    "event_id": "23",
    "level": "Information",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process would have been blocked from calling the API due to ROP exploit indications",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ROP SimExec Enforce",
    "event_id": "24",
    "level": "Warning",
    "channel": "Microsoft-Windows-Security-Mitigations/UserMode",
    "provider": "Microsoft-Windows-Security-Mitigations",
    "notes": "Process was blocked from calling the API due to ROP exploit indications",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "CFG Violation",
    "event_id": "5",
    "level": "Information",
    "channel": "System",
    "provider": "Microsoft-Windows-WER-Diag",
    "notes": "Control Flow Guard Violation",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Detected Malware",
    "event_id": "1006, 1116",
    "level": "Warning",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Malware detected",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Action on Malware Failed",
    "event_id": "1008",
    "level": "Error",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Action on malware failed",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "File Restored from Quarantine",
    "event_id": "1009",
    "level": "Information",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Restored file from quarantine",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Failed to remove item from quarantine",
    "event_id": "1010",
    "level": "Error",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Failed to remove item from quarantine",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Malware Removed",
    "event_id": "1007, 1117",
    "level": "Information",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Malware removal action taken",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Malware Removal Error",
    "event_id": "1118",
    "level": "Information",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Malware removal action taken with non-critical error",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Malware Removal Fatal Error",
    "event_id": "1119",
    "level": "Error",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Malware removal action attempted with critical error",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ASR Rule Triggers (Block-Mode)",
    "event_id": "1121",
    "level": "Warning",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Attack Surface Reduction rule fired in Block-Mode",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ASR Rule Triggers (Audit-Mode)",
    "event_id": "1122",
    "level": "Information",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Attack Surface Reduction rule fired in Audit-Mode",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Controlled Folder Access (Blocked)",
    "event_id": "1123",
    "level": "Warning",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Blocked Controlled Folder Access",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Controlled Folder Access (Audited)",
    "event_id": "1124",
    "level": "Information",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Audited Controlled Folder Access",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Network Protection (Block-Mode)",
    "event_id": "1125",
    "level": "Warning",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Network Protection fires in Audit-mode",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "Network Protection (Audit-Mode)",
    "event_id": "1126",
    "level": "Information",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Network Protection fires in Block-mode",
    "gpo": ""
  },
  {
    "category": "Windows Defender",
    "subcategory": "ASR Settings Changed",
    "event_id": "5007",
    "level": "Information",
    "channel": "Microsoft-Windows-Windows Defender/Operational",
    "provider": "Microsoft-Windows-Windows Defender",
    "notes": "Attack Surface Reduction, Controlled Folder Access or Network Protection settings changed",
    "gpo": ""
  }
];
