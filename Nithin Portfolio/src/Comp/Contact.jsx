import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LoaderPinwheelIcon } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "@/constants";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // State to control the modal
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, user_email, message } = formData;

    // Basic validation
    if (!from_name || !user_email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("service_jmvztuy", "template_qucpwxp", form.current, {
        publicKey: "AilpUl6FQoWdnQNWs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          toast.success("Email Sent Successfully.");
          setOpen(false); // Close modal on success
          setFormData({
            from_name: "",
            user_email: "",
            message: "",
          })
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Button to open modal */}
      

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="text-white">
          {/* Background div */}
          <div className="absolute inset-0 bg-slate-950 rounded-lg">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
          </div>

          {/* Modal content */}
          <div className="z-10 p-6">
            <DialogHeader>
              <DialogTitle className="text-white">Enter Your Details</DialogTitle>
              <DialogDescription>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                  <input type="text" value={"Nithin"} className="hidden" name="dev_name"/>
                  <label className="text-white font-semibold">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    className="rounded-lg border-2 border-white/50 h-10 p-2 bg-transparent text-white"
                  />
                  <label className="text-white font-semibold">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className="rounded-lg border-2 border-white/50 h-10 p-2 bg-transparent text-white"
                  />
                  <label className="text-white font-semibold">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-xl border-2 border-white/50 h-20 p-2 bg-transparent text-white"
                  />
                  <Button type="submit" className="mt-3 bg-white text-black hover:bg-white/75">
                    {loading ? <LoaderPinwheelIcon className="animate-spin" /> : "Send"}
                  </Button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
      <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div className='text-center tracking-tighter'>
        <motion.button 
        whileInView={{ y:0,opacity:1}}
        initial={{y:200,opacity:0}}
        transition={{duration:1}}
        onClick={() => setOpen(true)} className="bg-red-500 text-black text-xl p-2 hover:bg-white/80 rounded">Send a Message</motion.button>
            <motion.p
            whileInView={{x:0,opacity:1}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className='my-4 '>{CONTACT.address}</motion.p>
            <motion.p
            whileInView={{x:0,opacity:1}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className='my-4 '>{CONTACT.phoneNo}</motion.p>
            <a  href="#">{CONTACT.email}</a>
        </div>
    </div>
  );
}

export default Contact;