import React from 'react';

function Agreement(props) {
  return (
    <section>
      <p className="lead">
        Create agrees to offer cooking classes in exchange for payment by the client according to the following terms and conditions:
      </p>
      <h5>SAFETY</h5>
      <p>
        Culinary classes at Create’s location are hands-on and students are required to use various kitchen utensils and cooking equipment. We are committed to safety and health at all times in our kitchen. Students are supervised at all times and will be given age-appropriate tasks. Parents should be aware, however, that participation sometimes involves using knives and other sharp utensils, and that children will be working with and in close proximity to kitchen equipment and hot surfaces. Classes may also involve handling of raw food items, including meat. Safe sanitary practices will be reviewed with the students. By signing this form, the parent/guardian releases Create, the owner, and employees from all liability for injuries and/or damages incurred in connection with attendance in a cooking class.
      </p>
      <h5>ATTIRE</h5>
      <p>
        {' '}
        Class participants are encouraged to wear closed-toe shoes. Short sleeves are preferred. Long hair should be tied back. Students may be asked for any loose jewelry to be removed for the duration of class times.
      </p>
      <h5>SANITATION</h5>
      <p>
        {' '}
        Proper hand washing with warm water and soap is required after using the bathroom, sneezing, coughing or handling raw food products. Hand washing is the single most important activity that can be done to prevent food- borne illnesses.
      </p>
      <h5>SCHEDULING</h5>
      <p>
        {' '}
        Create reserves the right to cancel camps or classes and provide a full refund when camp or class minimum registration numbers are not met.
      </p>
      <h5>PAYMENT AND CANCELLATIONS</h5>
      <p>
        {' '}
        Payment is due in full at time of registration. Food costs, recipes, activity supplies, take-home containers and culinary instruction are included in tuition. Reservations are taken on a first come, first serve basis. No refunds will be given for missed classes, but in case of illness, a free make-up class will be allowed. Refunds will be honored for classes cancelled within 72 hours of start time.
      </p>
      <h5>LATE PICK-UP POLICY</h5>
      <p>
        {' '}
        Parents are expected to pick up their child at the time that class ends. There is a 15 minute grace period. After 15 minutes, parents are charged $5 for every 15 minutes they are late.
      </p>
      <h5>PHOTO, VIDEO OR OTHER RECORDING CONSENT</h5>
      <p>
        {' '}
        By signing this form the parent/guardian gives consent to Create to use images or filmed footage of cooking classes in printed materials or on the web for the purposes of promoting Create Chefs' classes. Please note there is no compensation for the use of your child’s likeness in any of our materials. Please indicate if you do not wish to have your child photographed or filmed.
      </p>
      <h5>MEDICAL CONSENT</h5>
      <p>
        {' '}
        By signing this form the parent/guardian gives permission for medical treatment to be administered to their child by a qualified medical professional in the event of an emergency. Every effort will be made to contact the parent or emergency contact, but in the event that no one can be reached the signer authorizes Create Chefs to act on behalf of and in the best interest of the child.
      </p>
      <h5>STUDENT RESPONSIBILITIES</h5>
      <p>
        {' '}
        Students are expected to show respect for others, follow directions from teachers and staff, and abide by all class rules. Create reserves the right to send a student home or decline their return if their behavior is inappropriate.
      </p>
    </section>
  );
}

export default Agreement;
