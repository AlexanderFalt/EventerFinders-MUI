import { 
  Box, 
  Typography, 
  Divider,
  Button,
  Paper,
} from '@mui/material';
import theme from '../../../styles.js';
import { useState } from 'react';

export default function TopEventsContent() {
  const buttons = [
    {
      id: 1, 
      title: "Introduction for Event managers", 
      summery: "This is the summery of Introduction for Event managers",
      text:` 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, deleniti nostrum recusandae ipsam, similique repellat odio, cumque nulla dolorem ullam at. 
          Soluta, quasi minima voluptate numquam quisquam necessitatibus? Accusantium, numquam.
          Voluptate facere nostrum quibusdam aut quia amet ullam sequi minus odit numquam nemo quaerat quos mollitia, 
          praesentium rerum eligendi, in sapiente dolorum iusto expedita libero autem officia. Earum, cupiditate animi.
          Dolores rerum, deleniti aliquid cupiditate deserunt natus rem nam quo, corrupti fugit aperiam temporibus quos 
          repellendus quis obcaecati, voluptas iste vitae! Quo est sequi sed ab ut iusto. Culpa, ut?
          Eum, quos ratione soluta porro ex asperiores assumenda? Deleniti similique commodi hic in minima voluptate deserunt
          corrupti suscipit quae blanditiis. Fuga porro autem recusandae, placeat rerum quo consequatur corrupti maiores.
          Animi unde in magni deserunt vero tempora sunt tenetur quidem nesciunt eligendi, doloribus aliquam reprehenderit
          fuga dignissimos veritatis corrupti voluptate? Eaque suscipit repellat, animi esse rerum est consectetur aspernatur alias?
          Sapiente nesciunt labore excepturi molestiae minus veritatis soluta perferendis magni expedita accusamus, eaque
          tempore suscipit omnis quibusdam sit quaerat qui. Ex voluptates voluptas, in sint autem necessitatibus fugit officia totam?
          Voluptatibus fugiat delectus vel vero blanditiis quas magni, ut corporis nobis obcaecati non laborum enim earum
          ab velit quia? Consequatur, at! Iure eligendi error, quae similique sequi laboriosam harum modi!
          Suscipit non doloremque laboriosam similique? Cupiditate necessitatibus in reprehenderit inventore voluptas
          velit nostrum, corporis totam eum fugit vitae quia vel doloribus, quo ratione excepturi numquam ducimus odio, blanditiis facere! Est!
          Magnam eligendi molestias dolore sunt labore! Magnam eaque commodi possimus molestias rem blanditiis
          laborum ad illum distinctio animi nobis pariatur, necessitatibus architecto atque in quod dicta minus? Natus, inventore incidunt.
          Ipsam corporis, quos consequuntur aperiam esse, voluptatum modi dolorem cupiditate tenetur eligendi 
          voluptates totam, animi impedit ducimus velit a ullam! Repellendus fugiat labore veritatis esse. Nam totam fugit incidunt aut!
          Nihil adipisci vitae beatae eum deserunt consequuntur delectus, aperiam, voluptatem dolorum error et,
          blanditiis ipsam ex! Quaerat ut illo obcaecati accusamus ad dolore est, dicta quam tempore voluptates natus labore.
          Laboriosam, expedita facilis autem qui nulla deserunt, repellat nesciunt vel voluptate beatae
          reprehenderit, voluptas dolore voluptates aperiam. Odit voluptates quisquam amet expedita similique optio illum. Nobis autem laboriosam blanditiis quisquam!
          Incidunt aliquid earum blanditiis nesciunt dolorum at omnis explicabo accusamus reiciendis atque
          ut quia facilis architecto doloremque impedit saepe consequuntur fugiat rerum eos, ullam quos mollitia minima ad. Velit, consequuntur.
          Accusantium natus doloremque deleniti magni, enim consequuntur perferendis illo aperiam saepe iure
          sunt nesciunt tempora repellendus quas numquam eos, quae, reprehenderit nihil dolore eveniet voluptates sint ipsum autem. Harum, aspernatur.
          Voluptatem ea voluptatibus possimus ab consectetur atque aut molestias nisi ipsa illum aperiam 
          culpa perferendis nesciunt exercitationem hic at, laboriosam obcaecati quisquam consequuntur odit optio iusto mollitia? Saepe, sed accusantium.
          Repellendus maxime provident voluptas ea, nemo in dolore illo corrupti quae! Est nobis 
          blanditiis repellendus minus sed ullam, quos ad velit voluptatem porro laboriosam unde beatae soluta ipsam dolore officia!
          Blanditiis rem, repudiandae perferendis cumque veniam architecto? Minus porro nemo praesentium est,
          repellat quisquam molestiae sapiente doloribus ut doloremque natus tempora ab velit, quasi voluptatum odio animi placeat voluptatibus voluptatem.
          Saepe, iure sint dolor perspiciatis a molestiae quisquam veritatis? Voluptatem veritatis maxime 
          unde id libero dolore, velit harum excepturi dicta, tempora, numquam nulla in molestiae. Saepe optio ratione delectus sapiente!
          Saepe in aliquam eius odio officia totam est adipisci, at, magni possimus deleniti nesciunt dolor, 
          quasi omnis. Tempora dolore est laboriosam ipsam saepe tenetur, sint repellendus veritatis atque, aliquam voluptatibus!
          Inventore quae harum est, voluptatum ipsum consectetur quia commodi maxime. Molestiae blanditiis 
          quibusdam excepturi velit ratione eum amet repellat porro! Aliquid laudantium recusandae, ipsum ullam cumque nesciunt voluptas cum reiciendis.
          Aut dolor impedit repudiandae, voluptas dignissimos autem iure minima totam fuga neque dolorem.
          Numquam, laudantium voluptatibus at impedit dolores ipsam explicabo vero eligendi delectus esse reprehenderit architecto nisi natus perferendis.
          Natus atque laudantium ullam sapiente, animi illo placeat molestias inventore ratione itaque esse 
      `
    },
    {
      id: 2, 
      title: "Introduction for Speakers", 
      summery: "This is the summery of Introduction for Speakers",
      text:` 
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, deleniti nostrum recusandae ipsam, similique repellat odio, cumque nulla dolorem ullam at. 
      Soluta, quasi minima voluptate numquam quisquam necessitatibus? Accusantium, numquam.
      Voluptate facere nostrum quibusdam aut quia amet ullam sequi minus odit numquam nemo quaerat quos mollitia, 
      praesentium rerum eligendi, in sapiente dolorum iusto expedita libero autem officia. Earum, cupiditate animi.
      Dolores rerum, deleniti aliquid cupiditate deserunt natus rem nam quo, corrupti fugit aperiam temporibus quos 
      repellendus quis obcaecati, voluptas iste vitae! Quo est sequi sed ab ut iusto. Culpa, ut?
      Eum, quos ratione soluta porro ex asperiores assumenda? Deleniti similique commodi hic in minima voluptate deserunt
       corrupti suscipit quae blanditiis. Fuga porro autem recusandae, placeat rerum quo consequatur corrupti maiores.
      Animi unde in magni deserunt vero tempora sunt tenetur quidem nesciunt eligendi, doloribus aliquam reprehenderit
       fuga dignissimos veritatis corrupti voluptate? Eaque suscipit repellat, animi esse rerum est consectetur aspernatur alias?
      Sapiente nesciunt labore excepturi molestiae minus veritatis soluta perferendis magni expedita accusamus, eaque
       tempore suscipit omnis quibusdam sit quaerat qui. Ex voluptates voluptas, in sint autem necessitatibus fugit officia totam?
      Voluptatibus fugiat delectus vel vero blanditiis quas magni, ut corporis nobis obcaecati non laborum enim earum
       ab velit quia? Consequatur, at! Iure eligendi error, quae similique sequi laboriosam harum modi!
      Suscipit non doloremque laboriosam similique? Cupiditate necessitatibus in reprehenderit inventore voluptas
       velit nostrum, corporis totam eum fugit vitae quia vel doloribus, quo ratione excepturi numquam ducimus odio, blanditiis facere! Est!
      Magnam eligendi molestias dolore sunt labore! Magnam eaque commodi possimus molestias rem blanditiis
       laborum ad illum distinctio animi nobis pariatur, necessitatibus architecto atque in quod dicta minus? Natus, inventore incidunt.
      Ipsam corporis, quos consequuntur aperiam esse, voluptatum modi dolorem cupiditate tenetur eligendi 
      voluptates totam, animi impedit ducimus velit a ullam! Repellendus fugiat labore veritatis esse. Nam totam fugit incidunt aut!
      Nihil adipisci vitae beatae eum deserunt consequuntur delectus, aperiam, voluptatem dolorum error et,
       blanditiis ipsam ex! Quaerat ut illo obcaecati accusamus ad dolore est, dicta quam tempore voluptates natus labore.
      Laboriosam, expedita facilis autem qui nulla deserunt, repellat nesciunt vel voluptate beatae
       reprehenderit, voluptas dolore voluptates aperiam. Odit voluptates quisquam amet expedita similique optio illum. Nobis autem laboriosam blanditiis quisquam!
      Incidunt aliquid earum blanditiis nesciunt dolorum at omnis explicabo accusamus reiciendis atque
       ut quia facilis architecto doloremque impedit saepe consequuntur fugiat rerum eos, ullam quos mollitia minima ad. Velit, consequuntur.
      Accusantium natus doloremque deleniti magni, enim consequuntur perferendis illo aperiam saepe iure
       sunt nesciunt tempora repellendus quas numquam eos, quae, reprehenderit nihil dolore eveniet voluptates sint ipsum autem. Harum, aspernatur.
      Voluptatem ea voluptatibus possimus ab consectetur atque aut molestias nisi ipsa illum aperiam 
      culpa perferendis nesciunt exercitationem hic at, laboriosam obcaecati quisquam consequuntur odit optio iusto mollitia? Saepe, sed accusantium.
      Repellendus maxime provident voluptas ea, nemo in dolore illo corrupti quae! Est nobis 
      blanditiis repellendus minus sed ullam, quos ad velit voluptatem porro laboriosam unde beatae soluta ipsam dolore officia!
      Blanditiis rem, repudiandae perferendis cumque veniam architecto? Minus porro nemo praesentium est,
       repellat quisquam molestiae sapiente doloribus ut doloremque natus tempora ab velit, quasi voluptatum odio animi placeat voluptatibus voluptatem.
      Saepe, iure sint dolor perspiciatis a molestiae quisquam veritatis? Voluptatem veritatis maxime 
      unde id libero dolore, velit harum excepturi dicta, tempora, numquam nulla in molestiae. Saepe optio ratione delectus sapiente!
      Saepe in aliquam eius odio officia totam est adipisci, at, magni possimus deleniti nesciunt dolor, 
      quasi omnis. Tempora dolore est laboriosam ipsam saepe tenetur, sint repellendus veritatis atque, aliquam voluptatibus!
      Inventore quae harum est, voluptatum ipsum consectetur quia commodi maxime. Molestiae blanditiis 
      quibusdam excepturi velit ratione eum amet repellat porro! Aliquid laudantium recusandae, ipsum ullam cumque nesciunt voluptas cum reiciendis.
      Aut dolor impedit repudiandae, voluptas dignissimos autem iure minima totam fuga neque dolorem.
       Numquam, laudantium voluptatibus at impedit dolores ipsam explicabo vero eligendi delectus esse reprehenderit architecto nisi natus perferendis.
      Natus atque laudantium ullam sapiente, animi illo placeat molestias inventore ratione itaque esse
      `
    },
    {
      id: 3, 
      title: "How to land more speaking gigs", 
      summery: "This is the summery of How to land more speaking gigs",
      text:` 
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, deleniti nostrum recusandae ipsam, similique repellat odio, cumque nulla dolorem ullam at. 
      Soluta, quasi minima voluptate numquam quisquam necessitatibus? Accusantium, numquam.
      Voluptate facere nostrum quibusdam aut quia amet ullam sequi minus odit numquam nemo quaerat quos mollitia, 
      praesentium rerum eligendi, in sapiente dolorum iusto expedita libero autem officia. Earum, cupiditate animi.
      Dolores rerum, deleniti aliquid cupiditate deserunt natus rem nam quo, corrupti fugit aperiam temporibus quos 
      repellendus quis obcaecati, voluptas iste vitae! Quo est sequi sed ab ut iusto. Culpa, ut?
      Eum, quos ratione soluta porro ex asperiores assumenda? Deleniti similique commodi hic in minima voluptate deserunt
       corrupti suscipit quae blanditiis. Fuga porro autem recusandae, placeat rerum quo consequatur corrupti maiores.
      Animi unde in magni deserunt vero tempora sunt tenetur quidem nesciunt eligendi, doloribus aliquam reprehenderit
       fuga dignissimos veritatis corrupti voluptate? Eaque suscipit repellat, animi esse rerum est consectetur aspernatur alias?
      Sapiente nesciunt labore excepturi molestiae minus veritatis soluta perferendis magni expedita accusamus, eaque
       tempore suscipit omnis quibusdam sit quaerat qui. Ex voluptates voluptas, in sint autem necessitatibus fugit officia totam?
      Voluptatibus fugiat delectus vel vero blanditiis quas magni, ut corporis nobis obcaecati non laborum enim earum
       ab velit quia? Consequatur, at! Iure eligendi error, quae similique sequi laboriosam harum modi!
      Suscipit non doloremque laboriosam similique? Cupiditate necessitatibus in reprehenderit inventore voluptas
       velit nostrum, corporis totam eum fugit vitae quia vel doloribus, quo ratione excepturi numquam ducimus odio, blanditiis facere! Est!
      Magnam eligendi molestias dolore sunt labore! Magnam eaque commodi possimus molestias rem blanditiis
       laborum ad illum distinctio animi nobis pariatur, necessitatibus architecto atque in quod dicta minus? Natus, inventore incidunt.
      Ipsam corporis, quos consequuntur aperiam esse, voluptatum modi dolorem cupiditate tenetur eligendi 
      voluptates totam, animi impedit ducimus velit a ullam! Repellendus fugiat labore veritatis esse. Nam totam fugit incidunt aut!
      Nihil adipisci vitae beatae eum deserunt consequuntur delectus, aperiam, voluptatem dolorum error et,
       blanditiis ipsam ex! Quaerat ut illo obcaecati accusamus ad dolore est, dicta quam tempore voluptates natus labore.
      Laboriosam, expedita facilis autem qui nulla deserunt, repellat nesciunt vel voluptate beatae
       reprehenderit, voluptas dolore voluptates aperiam. Odit voluptates quisquam amet expedita similique optio illum. Nobis autem laboriosam blanditiis quisquam!
      Incidunt aliquid earum blanditiis nesciunt dolorum at omnis explicabo accusamus reiciendis atque
       ut quia facilis architecto doloremque impedit saepe consequuntur fugiat rerum eos, ullam quos mollitia minima ad. Velit, consequuntur.
      Accusantium natus doloremque deleniti magni, enim consequuntur perferendis illo aperiam saepe iure
       sunt nesciunt tempora repellendus quas numquam eos, quae, reprehenderit nihil dolore eveniet voluptates sint ipsum autem. Harum, aspernatur.
      Voluptatem ea voluptatibus possimus ab consectetur atque aut molestias nisi ipsa illum aperiam 
      culpa perferendis nesciunt exercitationem hic at, laboriosam obcaecati quisquam consequuntur odit optio iusto mollitia? Saepe, sed accusantium.
      Repellendus maxime provident voluptas ea, nemo in dolore illo corrupti quae! Est nobis 
      blanditiis repellendus minus sed ullam, quos ad velit voluptatem porro laboriosam unde beatae soluta ipsam dolore officia!
      Blanditiis rem, repudiandae perferendis cumque veniam architecto? Minus porro nemo praesentium est,
       repellat quisquam molestiae sapiente doloribus ut doloremque natus tempora ab velit, quasi voluptatum odio animi placeat voluptatibus voluptatem.
      Saepe, iure sint dolor perspiciatis a molestiae quisquam veritatis? Voluptatem veritatis maxime 
      unde id libero dolore, velit harum excepturi dicta, tempora, numquam nulla in molestiae. Saepe optio ratione delectus sapiente!
      Saepe in aliquam eius odio officia totam est adipisci, at, magni possimus deleniti nesciunt dolor, 
      quasi omnis. Tempora dolore est laboriosam ipsam saepe tenetur, sint repellendus veritatis atque, aliquam voluptatibus!
      Inventore quae harum est, voluptatum ipsum consectetur quia commodi maxime. Molestiae blanditiis 
      quibusdam excepturi velit ratione eum amet repellat porro! Aliquid laudantium recusandae, ipsum ullam cumque nesciunt voluptas cum reiciendis.
      Aut dolor impedit repudiandae, voluptas dignissimos autem iure minima totam fuga neque dolorem.
       Numquam, laudantium voluptatibus at impedit dolores ipsam explicabo vero eligendi delectus esse reprehenderit architecto nisi natus perferendis.
      Natus atque laudantium ullam sapiente, animi illo placeat molestias inventore ratione itaque esse
      `
    },
    {
      id: 4, 
      title: "About us", 
      summery: "This is the summery of About us",
      text:` 
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, deleniti nostrum recusandae ipsam, similique repellat odio, cumque nulla dolorem ullam at. 
      Soluta, quasi minima voluptate numquam quisquam necessitatibus? Accusantium, numquam.
      Voluptate facere nostrum quibusdam aut quia amet ullam sequi minus odit numquam nemo quaerat quos mollitia, 
      praesentium rerum eligendi, in sapiente dolorum iusto expedita libero autem officia. Earum, cupiditate animi.
      Dolores rerum, deleniti aliquid cupiditate deserunt natus rem nam quo, corrupti fugit aperiam temporibus quos 
      repellendus quis obcaecati, voluptas iste vitae! Quo est sequi sed ab ut iusto. Culpa, ut?
      Eum, quos ratione soluta porro ex asperiores assumenda? Deleniti similique commodi hic in minima voluptate deserunt
       corrupti suscipit quae blanditiis. Fuga porro autem recusandae, placeat rerum quo consequatur corrupti maiores.
      Animi unde in magni deserunt vero tempora sunt tenetur quidem nesciunt eligendi, doloribus aliquam reprehenderit
       fuga dignissimos veritatis corrupti voluptate? Eaque suscipit repellat, animi esse rerum est consectetur aspernatur alias?
      Sapiente nesciunt labore excepturi molestiae minus veritatis soluta perferendis magni expedita accusamus, eaque
       tempore suscipit omnis quibusdam sit quaerat qui. Ex voluptates voluptas, in sint autem necessitatibus fugit officia totam?
      Voluptatibus fugiat delectus vel vero blanditiis quas magni, ut corporis nobis obcaecati non laborum enim earum
       ab velit quia? Consequatur, at! Iure eligendi error, quae similique sequi laboriosam harum modi!
      Suscipit non doloremque laboriosam similique? Cupiditate necessitatibus in reprehenderit inventore voluptas
       velit nostrum, corporis totam eum fugit vitae quia vel doloribus, quo ratione excepturi numquam ducimus odio, blanditiis facere! Est!
      Magnam eligendi molestias dolore sunt labore! Magnam eaque commodi possimus molestias rem blanditiis
       laborum ad illum distinctio animi nobis pariatur, necessitatibus architecto atque in quod dicta minus? Natus, inventore incidunt.
      Ipsam corporis, quos consequuntur aperiam esse, voluptatum modi dolorem cupiditate tenetur eligendi 
      voluptates totam, animi impedit ducimus velit a ullam! Repellendus fugiat labore veritatis esse. Nam totam fugit incidunt aut!
      Nihil adipisci vitae beatae eum deserunt consequuntur delectus, aperiam, voluptatem dolorum error et,
       blanditiis ipsam ex! Quaerat ut illo obcaecati accusamus ad dolore est, dicta quam tempore voluptates natus labore.
      Laboriosam, expedita facilis autem qui nulla deserunt, repellat nesciunt vel voluptate beatae
       reprehenderit, voluptas dolore voluptates aperiam. Odit voluptates quisquam amet expedita similique optio illum. Nobis autem laboriosam blanditiis quisquam!
      Incidunt aliquid earum blanditiis nesciunt dolorum at omnis explicabo accusamus reiciendis atque
       ut quia facilis architecto doloremque impedit saepe consequuntur fugiat rerum eos, ullam quos mollitia minima ad. Velit, consequuntur.
      Accusantium natus doloremque deleniti magni, enim consequuntur perferendis illo aperiam saepe iure
       sunt nesciunt tempora repellendus quas numquam eos, quae, reprehenderit nihil dolore eveniet voluptates sint ipsum autem. Harum, aspernatur.
      Voluptatem ea voluptatibus possimus ab consectetur atque aut molestias nisi ipsa illum aperiam 
      culpa perferendis nesciunt exercitationem hic at, laboriosam obcaecati quisquam consequuntur odit optio iusto mollitia? Saepe, sed accusantium.
      Repellendus maxime provident voluptas ea, nemo in dolore illo corrupti quae! Est nobis 
      blanditiis repellendus minus sed ullam, quos ad velit voluptatem porro laboriosam unde beatae soluta ipsam dolore officia!
      Blanditiis rem, repudiandae perferendis cumque veniam architecto? Minus porro nemo praesentium est,
       repellat quisquam molestiae sapiente doloribus ut doloremque natus tempora ab velit, quasi voluptatum odio animi placeat voluptatibus voluptatem.
      Saepe, iure sint dolor perspiciatis a molestiae quisquam veritatis? Voluptatem veritatis maxime 
      unde id libero dolore, velit harum excepturi dicta, tempora, numquam nulla in molestiae. Saepe optio ratione delectus sapiente!
      Saepe in aliquam eius odio officia totam est adipisci, at, magni possimus deleniti nesciunt dolor, 
      quasi omnis. Tempora dolore est laboriosam ipsam saepe tenetur, sint repellendus veritatis atque, aliquam voluptatibus!
      Inventore quae harum est, voluptatum ipsum consectetur quia commodi maxime. Molestiae blanditiis 
      quibusdam excepturi velit ratione eum amet repellat porro! Aliquid laudantium recusandae, ipsum ullam cumque nesciunt voluptas cum reiciendis.
      Aut dolor impedit repudiandae, voluptas dignissimos autem iure minima totam fuga neque dolorem.
       Numquam, laudantium voluptatibus at impedit dolores ipsam explicabo vero eligendi delectus esse reprehenderit architecto nisi natus perferendis.
      Natus atque laudantium ullam sapiente, animi illo placeat molestias inventore ratione itaque esse
      `
    },
  ]

  const [titleState, setTitleState] = useState(buttons[0].title);
  const [summeryState, setSummeryState] = useState(buttons[0].summery);
  const [textState, setTextState] = useState(buttons[0].text);

  return (
    <Box 
      sx={{ 
        height: "100%", 
        width: "100%", 
        padding: '2%', 
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Content Section */}
      <Box 
        sx={{ 
          height: "100%", 
          width: "100%", 
          display: 'flex', 
          flexDirection: 'row',
        }}
      >
        {/* Sidebar Navigation */}
        <Box 
          sx={{ 
            width: "25%", 
            borderRight: "1px solid", 
            borderColor: theme.palette.divider, 
            padding: '2%',
          }}
        >
          <Typography color="text.primary" variant="h5" component="h2" gutterBottom sx={{marginLeft: "0.5%"}}>
            Documents
          </Typography>
          {buttons.map((item, index) => (
            <Button
              variant="text"
              onClick={() => {
                setTitleState(item.title);
                setTextState(item.text);
                setSummeryState(item.summery);
              }}
              key={index}
              sx={{
                fontWeight: "400",
                borderRadius: "0px",
                border: "1px solid transparent",
                padding: 0,
                width: "90%",
                marginBottom: "2%",
                justifyContent: "flex-start",
                textAlign: "left", 
                '&:hover' : {
                  backgroundColor: "transparent",
                  borderBottom: "1px solid black",
                  color: "black",
                }
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>

        {/* Main Content Area */}
        <Box 
          sx={{ 
            width: "75%", 
            padding: '2%', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2,
          }}
        >
          <Typography color="text.primary" variant="h5" component="h2" gutterBottom>
            {titleState}
          </Typography>
          <Typography variant="body1" component="p">
            {summeryState}
          </Typography>
          
          <Divider />

          <Paper elevation={3} sx={{borderRadius: 1, overflowY: "auto", overflowX: "hidden"}}>
            <Typography variant="body1" component="pre">
              {textState}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}