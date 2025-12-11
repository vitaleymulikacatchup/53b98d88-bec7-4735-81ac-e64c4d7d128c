"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlaySplit from '@/components/sections/hero/HeroOverlaySplit';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import FeatureCardEighteen from '@/components/sections/feature/FeatureCardEighteen';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Lightbulb, Code, Zap, TrendingUp, Users, BookOpen, Target, Award, Linkedin, Github, Twitter, Globe, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="largeSizeMediumTitles"
      background="plain"
      cardStyle="gradient-mesh"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="Be Better"
          navItems={[
            {"name": "About", "id": "about"},
            {"name": "Courses", "id": "features"},
            {"name": "Testimonials", "id": "testimonials"},
            {"name": "FAQ", "id": "faq"},
            {"name": "Contact", "id": "contact"}
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlaySplit 
          title="Transform Your Tech Career"
          description="Master the most in-demand programming skills with our expert-led IT courses. Join hundreds of graduates who have advanced their careers."
          buttons={[
            {"text": "Explore Courses", "href": "#features"},
            {"text": "Learn More", "href": "#about"}
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455761065-qjwzs3un.png"
          imageAlt="Programming and coding environment"
          showDimOverlay={true}
          ariaLabel="Hero section introducing Be Better IT School"
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout 
          variant="card"
          title="About Be Better"
          description="We are committed to providing high-quality IT education that prepares students for real-world challenges."
          tag="Our Mission"
          tagIcon={Lightbulb}
          textboxLayout="default"
          contentTag="WHO WE ARE"
          contentTagIcon={Code}
          contentTitle="Industry-Focused IT Education"
          contentDescription="Be Better is an IT training school dedicated to developing skilled professionals. We combine cutting-edge curriculum with hands-on projects, mentoring from industry experts, and career support to ensure our graduates are job-ready and confident in their abilities."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455764310-kj1aejhw.jpg"
          imageAlt="Be Better IT School classroom environment"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEighteen 
          title="Why Choose Be Better"
          description="See how our structured learning approach outperforms traditional methods"
          tag="Our Advantage"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          negativeCard={{
            "title": "Traditional Learning",
            "items": ["Self-paced without guidance", "Limited hands-on practice", "No career support", "Outdated materials"],
            "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455762207-xl5896us.jpg",
            "imageAlt": "Traditional learning approach"
          }}
          positiveCard={{
            "title": "Be Better Approach",
            "items": ["Expert instructors and mentors", "Real-world project experience", "Career placement assistance", "Current industry standards"],
            "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455763133-tx73h3hb.jpg",
            "imageAlt": "Modern online learning approach"
          }}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree 
          title="Our Impact"
          description="Proven results from our dedicated educational approach"
          tag="By The Numbers"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          metrics={[
            {"id": "1", "icon": Users, "title": "Students Trained", "value": "2,500+"},
            {"id": "2", "icon": BookOpen, "title": "Active Courses", "value": "15+"},
            {"id": "3", "icon": Target, "title": "Job Placement", "value": "94%"},
            {"id": "4", "icon": Award, "title": "Years Experience", "value": "10+"}
          ]}
          containerStyle="default"
          gridVariant="four-items-2x2-equal-grid"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree 
          title="Our Instructors"
          description="Learn from experienced professionals with industry expertise"
          tag="Expert Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          members={[
            {
              "id": "1",
              "name": "Alex Rodriguez",
              "role": "Full-Stack Developer",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455765307-78we99qv.jpg",
              "imageAlt": "Alex Rodriguez",
              "socialLinks": [
                {"icon": Linkedin, "url": "https://linkedin.com"},
                {"icon": Github, "url": "https://github.com"}
              ]
            },
            {
              "id": "2",
              "name": "Sarah Chen",
              "role": "Data Science Lead",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455766232-55cimsx7.jpg",
              "imageAlt": "Sarah Chen",
              "socialLinks": [
                {"icon": Linkedin, "url": "https://linkedin.com"},
                {"icon": Twitter, "url": "https://twitter.com"}
              ]
            },
            {
              "id": "3",
              "name": "Michael Kumar",
              "role": "Cloud Architect",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455767090-ux6jq9p5.jpg",
              "imageAlt": "Michael Kumar",
              "socialLinks": [
                {"icon": Linkedin, "url": "https://linkedin.com"},
                {"icon": Globe, "url": "https://example.com"}
              ]
            },
            {
              "id": "4",
              "name": "Emma Thompson",
              "role": "Cybersecurity Expert",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455767975-pe255zae.jpg",
              "imageAlt": "Emma Thompson",
              "socialLinks": [
                {"icon": Linkedin, "url": "https://linkedin.com"},
                {"icon": Github, "url": "https://github.com"}
              ]
            }
          ]}
          containerStyle="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen 
          testimonial="Be Better completely transformed my career. The hands-on projects and mentorship from experienced instructors gave me the confidence to land my dream job as a full-stack developer. I highly recommend this school to anyone serious about their tech career."
          rating={5}
          author="James Wilson, Full-Stack Developer at TechCorp"
          avatars={[
            {"src": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455773777-4g9ymufo.jpg", "alt": "Student 1"},
            {"src": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455774730-2zm3l3y6.jpg", "alt": "Student 2"},
            {"src": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455775639-5ohuqswk.jpg", "alt": "Student 3"},
            {"src": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455776673-hmmchrnf.jpg", "alt": "Student 4"},
            {"src": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455777844-mvhvbkn3.jpg", "alt": "Student 5"},
            {"src": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765455778771-c932uqyu.jpg", "alt": "Student 6"}
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase 
          title="Frequently Asked Questions"
          description="Get answers to common questions about our courses and programs"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {"id": "1", "title": "What are the prerequisites for enrolling?", "content": "Most of our beginner courses require no prior programming experience. We recommend basic computer literacy and a passion for learning. For advanced courses, some programming fundamentals are expected."},
            {"id": "2", "title": "What is the duration of the courses?", "content": "Course durations vary from 4 weeks for intensive bootcamps to 12 weeks for comprehensive programs. We offer both full-time and part-time options to fit your schedule."},
            {"id": "3", "title": "Do you offer job placement assistance?", "content": "Yes, we provide career support including resume building, interview preparation, and job placement assistance. Our 94% job placement rate reflects our commitment to your success."},
            {"id": "4", "title": "What payment options are available?", "content": "We offer flexible payment plans, installment options, and various financing solutions. Contact our admissions team for detailed information about payment plans tailored to your needs."},
            {"id": "5", "title": "Are the courses online or in-person?", "content": "We offer both online and in-person options. Many of our courses are available in hybrid format, allowing you to choose the learning mode that works best for you."},
            {"id": "6", "title": "What kind of projects will I work on?", "content": "Students work on real-world projects throughout their courses, from building web applications to developing data analysis tools. These projects form part of your portfolio for future job applications."}
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm 
          title="Get in Touch"
          description="Have questions about our courses? Fill out the form below and our team will get back to you within 24 hours."
          useInvertedBackground="noInvert"
          inputs={[
            {"name": "fullName", "type": "text", "placeholder": "Full Name", "required": true},
            {"name": "email", "type": "email", "placeholder": "Email Address", "required": true},
            {"name": "phone", "type": "tel", "placeholder": "Phone Number", "required": false},
            {"name": "courseInterest", "type": "text", "placeholder": "Course of Interest", "required": true}
          ]}
          textarea={{
            "name": "message",
            "placeholder": "Tell us about your learning goals...",
            "rows": 5,
            "required": true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal 
          logoText="Be Better"
          logoAlt="Be Better IT School"
        />
      </div>
    </ThemeProvider>
  );
}