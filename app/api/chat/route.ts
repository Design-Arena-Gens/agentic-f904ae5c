import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a smart, polite, and helpful AI Salon Assistant for Shaad Salon.

Salon Details:
- Owner Name: Shaad
- Contact Number: 9286078562
- Business Type: Salon (Haircut, Beard, Facial, Hair Spa, etc.)

Your Responsibilities:
- Customers ka politely welcome karna
- Salon services ke baare me simple language me batana
- Haircut, beard, facial, hair spa jaise services explain karna
- Appointment booking me help karna
- Working hours aur location ke bare me batana (jab customer pooche)
- Owner se contact karne ke liye number dena
- Friendly, respectful aur professional tone rakhna

Conversation Style:
- Simple Hindi / Hinglish use karo
- Short aur clear replies do
- Customer ko "Sir" ya "Madam" keh kar baat karo

Rules:
- Agar koi complex sawal ho to customer ko owner se baat karne ko bolo
- Hamesha end me contact number share karo agar booking ya help chahiye ho
- Keep responses concise and friendly

Services offered:
- Hair Cutting (Modern styles, Traditional cuts)
- Beard Shaping & Grooming
- Facial (Different types available)
- Hair Spa & Treatment
- Hair Coloring
- Head Massage

Always be helpful, polite, and end conversations with contact information when relevant.`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 })
    }

    // Simple rule-based responses
    const lowerMessage = message.toLowerCase()
    let response = ''

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('namaste') || lowerMessage.includes('hey')) {
      response = `Namaste Sir/Madam! 🙏 Shaad Salon me aapka swagat hai!\n\nHum ye services provide karte hain:\n✂️ Hair Cutting\n🧔 Beard Shaping\n✨ Facial\n💆 Hair Spa\n🎨 Hair Coloring\n\nAppointment ke liye call karein: 9286078562`
    }
    else if (lowerMessage.includes('service') || lowerMessage.includes('kya kya') || lowerMessage.includes('available')) {
      response = `Shaad Salon ki services:\n\n✂️ Hair Cutting - Modern aur traditional styles\n🧔 Beard Shaping & Grooming - Perfect look\n✨ Facial - Different types available\n💆 Hair Spa & Treatment - Relaxing experience\n🎨 Hair Coloring - Latest colors\n💆‍♂️ Head Massage - Stress relief\n\nBooking ke liye call karein: 9286078562`
    }
    else if (lowerMessage.includes('haircut') || lowerMessage.includes('hair cut') || lowerMessage.includes('katwa')) {
      response = `Haircut Service 💈\n\nHum modern aur traditional dono style me haircut karte hain:\n- Fade Cut\n- Undercut\n- Crew Cut\n- Layer Cut\n- Simple Trim\n\nSabhi professional equipment use karte hain. Appointment book karne ke liye: 9286078562`
    }
    else if (lowerMessage.includes('beard') || lowerMessage.includes('dadhi')) {
      response = `Beard Service 🧔\n\nBeard shaping aur grooming:\n- Beard Trim\n- Beard Styling\n- Clean Shave\n- Beard Coloring\n\nProfessional grooming ka complete experience!\n\nAppointment: 9286078562`
    }
    else if (lowerMessage.includes('facial')) {
      response = `Facial Services ✨\n\nDifferent types of facials available:\n- Basic Facial\n- Gold Facial\n- Diamond Facial\n- Fruit Facial\n- Anti-aging Facial\n\nSkin care ka complete package!\n\nBook karein: 9286078562`
    }
    else if (lowerMessage.includes('spa') || lowerMessage.includes('hair spa')) {
      response = `Hair Spa Service 💆\n\nHair spa me milta hai:\n- Deep conditioning\n- Scalp massage\n- Hair treatment\n- Dandruff control\n- Hair strengthening\n\nRelaxing aur rejuvenating experience!\n\nAppointment: 9286078562`
    }
    else if (lowerMessage.includes('price') || lowerMessage.includes('rate') || lowerMessage.includes('kitna') || lowerMessage.includes('cost')) {
      response = `Price ke liye, please owner Shaad se directly baat karein.\n\nDifferent services ke alag rates hain aur special packages bhi available hain.\n\nContact karein: 9286078562 📞`
    }
    else if (lowerMessage.includes('appointment') || lowerMessage.includes('book') || lowerMessage.includes('booking')) {
      response = `Appointment booking ke liye:\n\n📞 Call karein: 9286078562\n\nOwner Shaad aapki preferred date aur time ke according slot fix kar denge.\n\nWalk-ins bhi welcome hain, par appointment recommended hai! 😊`
    }
    else if (lowerMessage.includes('time') || lowerMessage.includes('timing') || lowerMessage.includes('khula') || lowerMessage.includes('open')) {
      response = `Working hours ke liye owner se confirm karein.\n\nShaad ko call karein: 9286078562\n\nWo aapko exact timings aur weekly offs ke baare me batayenge! 📞`
    }
    else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('kaha') || lowerMessage.includes('where')) {
      response = `Location aur complete address ke liye owner Shaad se contact karein.\n\nCall karein: 9286078562 📍\n\nWo aapko exact location aur directions de denge!`
    }
    else if (lowerMessage.includes('contact') || lowerMessage.includes('number') || lowerMessage.includes('phone')) {
      response = `📞 Shaad Salon Contact:\n\nOwner: Shaad\nMobile: 9286078562\n\nAppointment, queries, ya koi bhi information ke liye call karein!`
    }
    else if (lowerMessage.includes('thank') || lowerMessage.includes('dhanyawad') || lowerMessage.includes('shukriya')) {
      response = `Aapka swagat hai! 🙏\n\nShaad Salon choose karne ke liye dhanyawad!\n\nKoi bhi zarurat ho to call karein: 9286078562\n\nAapse milkar khushi hogi! 😊`
    }
    else {
      response = `Main aapki madad karna chahta hoon! 😊\n\nAap mujhse pooch sakte hain:\n- Services ke baare me\n- Appointment booking\n- Prices\n- Location\n- Working hours\n\nYa seedha owner se baat karne ke liye:\n📞 9286078562`
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Internal server error', response: 'Maaf kijiye, technical issue hai. Contact: 9286078562' },
      { status: 500 }
    )
  }
}
