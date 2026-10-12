import { MailIcon } from "lucide-react";

import { IntroSection } from "@/components/about/intro-section";
import { AppLink } from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";
import { LINK } from "@/constants/links";

const AboutSection = () => {
  return (
    <IntroSection>
      <div className="text-muted-foreground max-w-xl text-base sm:text-[1.125rem] leading-relaxed font-normal">
        <p>
          Software developer focused on backend architectures, scale, and clean APIs. Simple by design.
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <p className="text-muted-foreground text-sm">
          Interested in working together? Get in touch via email or social links below.
        </p>
        <div className="flex flex-row items-center gap-2">
          <Button
            nativeButton={false}
            render={
              <AppLink
                href={`mailto:${LINK.EMAIL}`}
                target="_blank"
                eventName="send_email_click"
              />
            }
          >
            <MailIcon />
            Send an email
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <AppLink
                href={LINK.GITHUB}
                target="_blank"
                eventName="external_link_click"
              />
            }
          >
            GitHub
          </Button>
        </div>
      </div>
    </IntroSection>
  );
};

export { AboutSection };
