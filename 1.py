import smtplib
import time
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os

# Email configuration
SENDER_EMAIL = "kunalraj3374@gmail.com"
SENDER_PASSWORD = "cicj tnsz xtwy llgz"  # You'll need to use an App Password (see instructions below)
SENDER_NAME = "Kunal Raj"

# Email subject and body
SUBJECT = "Application for Software Engineer / Full-Stack Developer Position"

EMAIL_BODY = """Dear Hiring Team,

I hope this message finds you well.

I am writing to express my interest in Software Engineer / Full-Stack Developer opportunities at your organization. I am currently working as an Associate Software Developer with experience building production-ready web and mobile applications using React, React Native, Next.js, Node.js, PostgreSQL, MongoDB, and cloud platforms such as AWS and Vercel.

I have delivered end-to-end features, real-time dashboards, scalable APIs, and cross-platform applications used by 1,000+ users.

You can review my profile and work here:
* Portfolio: https://quiet-malabi-9318c8.netlify.app/
* LinkedIn: https://www.linkedin.com/in/kunalraj3374/
* GitHub: https://github.com/KunalRaj9835
* Resume: https://ffifonhbzyyjbmaqpyqt.supabase.co/storage/v1/object/public/portfolio/resume.pdf

I would welcome the opportunity to discuss suitable roles.

Thank you for your time and consideration.

Best regards,
Kunal Raj
Software Engineer
Email: kunalraj3374@gmail.com
Phone: +91-6203580252
"""

# List of recipient emails - ADD YOUR RECIPIENTS HERE
RECIPIENTS = [
    "joseph.rencilin@chase.com",
"danica.x.pereira@jpmchase.com"
]

# Path to your resume file
RESUME_PATH = "/Users/kunalraj/Downloads/Kunal_Raj_cv_Fullstack.pdf"  # Update this path to where your resume is saved

def send_email(recipient_email, resume_path):
    """Send an email with resume attachment to a single recipient"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = f"{SENDER_NAME} <{SENDER_EMAIL}>"
        msg['To'] = recipient_email
        msg['Subject'] = SUBJECT
        
        # Add email body
        msg.attach(MIMEText(EMAIL_BODY, 'plain'))
        
        # Attach resume if file exists
        if os.path.exists(resume_path):
            with open(resume_path, 'rb') as attachment:
                part = MIMEBase('application', 'octet-stream')
                part.set_payload(attachment.read())
                encoders.encode_base64(part)
                part.add_header(
                    'Content-Disposition',
                    f'attachment; filename= {os.path.basename(resume_path)}'
                )
                msg.attach(part)
        else:
            print(f"Warning: Resume file not found at {resume_path}")
            return False
        
        # Connect to Gmail SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        
        # Login
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        
        # Send email
        text = msg.as_string()
        server.sendmail(SENDER_EMAIL, recipient_email, text)
        server.quit()
        
        print(f"✓ Email sent successfully to {recipient_email}")
        return True
        
    except Exception as e:
        print(f"✗ Failed to send email to {recipient_email}")
        print(f"  Error: {str(e)}")
        return False

def main():
    """Main function to send emails to all recipients"""
    print("=" * 60)
    print("Email Automation Script")
    print("=" * 60)
    print(f"Sender: {SENDER_EMAIL}")
    print(f"Total recipients: {len(RECIPIENTS)}")
    print(f"Resume: {RESUME_PATH}")
    print("=" * 60)
    
    # Check if password is set
    if not SENDER_PASSWORD:
        print("\n⚠ ERROR: Please set your Gmail App Password in the script!")
        print("\nHow to get Gmail App Password:")
        print("1. Go to https://myaccount.google.com/security")
        print("2. Enable 2-Step Verification if not already enabled")
        print("3. Go to https://myaccount.google.com/apppasswords")
        print("4. Create a new app password for 'Mail'")
        print("5. Copy the 16-character password and paste it in SENDER_PASSWORD")
        return
    
    # Check if resume exists
    if not os.path.exists(RESUME_PATH):
        print(f"\n⚠ ERROR: Resume file not found at {RESUME_PATH}")
        print("Please update RESUME_PATH with the correct path to your resume.")
        return
    
    # Confirm before sending
    print("\nReady to send emails. Press Enter to continue or Ctrl+C to cancel...")
    input()
    
    successful = 0
    failed = 0
    
    # Send emails one by one
    for i, recipient in enumerate(RECIPIENTS, 1):
        print(f"\n[{i}/{len(RECIPIENTS)}] Sending to {recipient}...")
        
        if send_email(recipient, RESUME_PATH):
            successful += 1
        else:
            failed += 1
        
        # Wait between emails to avoid being flagged as spam
        # Skip wait for the last email
        if i < len(RECIPIENTS):
            wait_time = 3  # seconds
            print(f"  Waiting {wait_time} seconds before next email...")
            time.sleep(wait_time)
    
    # Summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"✓ Successful: {successful}")
    print(f"✗ Failed: {failed}")
    print(f"Total: {len(RECIPIENTS)}")
    print("=" * 60)

if __name__ == "__main__":
    main()