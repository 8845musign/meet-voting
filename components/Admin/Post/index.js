const Page = () => (
  <form>
    <div>
      <label for="title">Event Title</label>
      <input type="text" id="title" />
    </div>

    <div>
      <label for="date">Date</label>
      <input type="date" id="date" />
    </div>

    <div>
    <label for="minimumCharge">Minimum Charge</label>
    <input type="text" id=",inimumCharge" />
    </div>

    <div>
      <label for="description">Description</label>
      <textarea id="description" />
    </div>
  </form>
)

export default Page