<script>
    import logo from "$lib/assets/logo.png";
</script>

<section class="nav-top">
    <img src={logo} alt="Logo" class="logo" />
   
    <select id="glass" class="lang">
      <option value="en">English</option>
      <option value="nl">Dutch</option>
    </select>

</section>



<style>
 .nav-top {
  display: flex;
  align-items: center;
  justify-content: center; 
  position: relative;
  margin-top: 2rem;
}

.lang {
  margin-right: 2rem;
  position: absolute;
  right: 0;
  padding: 0.7rem 3rem;
  font-family: var(--font-body);
  appearance: none;

}

</style>