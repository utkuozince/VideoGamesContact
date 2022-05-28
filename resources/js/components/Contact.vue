<template>
<div class="row contact">
<div class="get-in">
    <h5>GET IN TOUCH</h5>
    <article>
      The classic galactical adventure arrives on Nintendo Switch! The tyrant
      Lassic rules the cosmos, and it is up to you to defeat his evil reign.
      Witness the revival of this defining RPG in SEGA AGES Phantasy Star. Take
      advantage of the new dungeon map display and the acclaimed “Ages Mode” as
      you traverse tricky dungeon mazes and battle ferocious 8-bit beasts.
      Phantasy Star has claimed its place as a pioneer RPG and its retro-spirit
      is sure to find a home in the hearts of old and new fans alike.
    </article>
    <div class="card">
      <div class="card-body">
        <div class="row contact-form">
            <h6>Contact Form</h6>
          <div class="col-md-6">
            <label for="name">Name <span>*</span></label>
            <input type="text" name="name" class="form-control" />
          </div>
          <div class="col-md-6">
            <label for="email">Email Adress <span>*</span></label>
            <input type="text" name="email" class="form-control" />
          </div>
          <div class="col-md-12 messages">
            <label for="message">Messages <span>*</span> </label>
            <textarea
              name="message"
              id=""
              cols="5"
              rows="3"
              class="form-control"
            ></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" class="btn-sm">Send</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

</template>


<style scoped>
h5 {
  font-weight: bolder;
}

h6,label {
  font-weight: bolder;
}

article{
    padding-bottom: 40px;
}
.get-in{
    /* margin-left: 200px;
    margin-right: 200px;
    margin-top: 50px;
    margin-bottom: 50px; */
    width:50%;
    align-items: center;
    justify-content: center;


}
.contact-form{
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 6px;
    margin-top: 6px;
}

.messages{
    padding-top: 15px;
    padding-bottom: 10px;
}

.contact{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
